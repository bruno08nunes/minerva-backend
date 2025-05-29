import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Reset User Streak Route", () => {
    it("should be able to reset user streak", async () => {
        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            streak: 5
        });

        const token = signJwt({ id: id, role: role });

        const response = await request(app)
            .patch("/users/streak/reset")
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.user).toMatchObject({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            streak: 0
        });
    });
});
