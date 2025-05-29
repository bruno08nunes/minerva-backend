import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Rankin User Route - Invalid Amount", () => {
    it("should not be able to list the user ranking with invalid amount", async () => {
        await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            semanalXP: 500
        });

        await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno2@email.com",
            password: "admin123",
            username: "bruno08nunes2",
        });

        const response = await request(app).get(`/ranking?amount=-5`);

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });
});
