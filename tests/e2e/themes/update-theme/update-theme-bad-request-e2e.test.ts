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
    it("should not be able to update an theme with invalid values", async () => {
        const icon = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const theme = await themeRepository.create({
            name: "Test Theme",
            description: "This is a test theme",
            iconId: icon.id,
            slug: "test-theme",
        });

        const updatedThemeData = {};

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

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Invalid values");
    });

    it("should not be able to update a theme with invalid id", async () => {
        const updatedThemeData = {
            name: "Updated Test Theme",
            description: "This is an updated test theme",
        };

        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno2@email.com",
            password: "admin123",
            username: "bruno08nunes2",
            role: "ADMIN",
        });

        const token = signJwt({ id: id, role: role });

        const response = await request(app)
            .put(`/themes/invalid-id`)
            .set("Authorization", `Bearer ${token}`)
            .send(updatedThemeData);

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });
});
