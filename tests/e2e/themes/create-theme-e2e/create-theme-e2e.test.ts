import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaThemesRepository } from "../../../../src/repositories/prisma/prisma-themes-repository";
import request from "supertest";
import app from "../../../../src/app";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";

const themeRepository = new PrismaThemesRepository();
const iconRepository = new PrismaIconsRepository();
const userRepository = new PrismaUsersRepository();

describe("[e2e] Create Theme Route", () => {
    it("should be able to create a theme", async () => {
        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            role: "ADMIN",
        });

        const token = signJwt({ id: id, role: role });

        const response = await request(app)
            .post("/themes")
            .set("Authorization", `Bearer ${token}`)
            .send({
                name: "Lorem",
                description: "Lorem ipsum dolor.",
                iconId: iconId,
                slug: "lorem",
            });

        expect(response.status).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Theme created succesfuly");
        expect(response.body.data).toMatchObject({
            name: "Lorem",
            description: "Lorem ipsum dolor.",
            slug: "lorem",
        });

        const themeInDb = await themeRepository.findBySlug("lorem");
        expect(themeInDb).not.toBeNull();
    });
});
