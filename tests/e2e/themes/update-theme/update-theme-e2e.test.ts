import request from "supertest";
import { PrismaThemesRepository } from "../../../../src/repositories/prisma/prisma-themes-repository";
import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";

const themeRepository = new PrismaThemesRepository();
const iconRepository = new PrismaIconsRepository();
const userRepository = new PrismaUsersRepository();

describe("[e2e] Update Theme Route", () => {
    it("should update an existing theme", async () => {
        const icon = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const theme = await themeRepository.create({
            name: "Test Theme",
            description: "This is a test theme",
            iconId: icon.id,
            slug: "test-theme",
        });

        const updatedThemeData = {
            name: "Updated Test Theme",
            description: "This is an updated test theme",
            iconId: icon.id,
        };

        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            role: "ADMIN",
        });

        const token = signJwt({ id: id, role: role });

        const response = await request(app)
            .put(`/themes/${theme.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send(updatedThemeData);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.name).toBe(updatedThemeData.name);
        expect(response.body.data.description).toBe(
            updatedThemeData.description
        );
    });
});
