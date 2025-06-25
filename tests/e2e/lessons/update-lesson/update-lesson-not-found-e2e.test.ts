import request from "supertest";
import app from "../../../../src/app";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Update Lesson Route", () => {
    it("should return 404 when trying to update a lesson that does not exist", async () => {
        const { id: userId } = await userRepository.create({
            name: "John Doe",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            role: "ADMIN",
        });

        const token = signJwt({ id: userId, role: "ADMIN" });

        const response = await request(app)
            .put("/lessons/00000000-0000-0000-0000-000000000000")
            .set("Authorization", `Bearer ${token}`)
            .send({
                name: "Updated Lesson 1",
                description: "Updated description for Lesson 1",
                rewardXP: 150,
                order: 2,
                topicId: "some-topic-id",
                themeId: "some-theme-id",
                iconId: "some-icon-id",
            });

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Resource not found.");
    });
});
