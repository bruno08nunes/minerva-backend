import request from "supertest";
import { PrismaThemesRepository } from "../../../../src/repositories/prisma/prisma-themes-repository";
import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";

const themeRepository = new PrismaThemesRepository();
const iconRepository = new PrismaIconsRepository();
const userRepository = new PrismaUsersRepository();

describe("[e2e] Delete Theme Route", () => {
    it("should delete an existing theme", async () => {
        const icon = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const theme = await themeRepository.create({
            name: "Test Theme",
            description: "This is a test theme",
            iconId: icon.id,
            slug: "test-theme",
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
            .delete(`/themes/${theme.id}`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Theme deleted successfully.");
    });
});
