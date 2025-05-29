import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Increment User XP Route", () => {
    it("should be able to increment user xp", async () => {
        const { id } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            semanalXP: 500,
        });

        const response = await request(app).put(`/users/xp/${id}`).send({
            amount: 200
        });

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.user.semanalXP).toBe(700);
    });
});
