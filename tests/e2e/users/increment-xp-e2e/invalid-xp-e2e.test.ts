import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Increment User XP Route - Invalid XP", () => {
    it("should not be able to increment user xp with invalid xp", async () => {
        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            semanalXP: 500,
        });

        const token = signJwt({ id, role });

        const response = await request(app)
            .put(`/users/xp`)
            .send({
                amount: -500,
            })
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });
});
