import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Increment User XP Route", () => {
    it("should be able to increment user xp", async () => {
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
                amount: 200,
            })
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.user.semanalXP).toBe(700);
    });
});
