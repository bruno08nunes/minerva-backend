import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Rankin User Route", () => {
    it("should be able to list the user ranking", async () => {
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

        const response = await request(app).get(`/ranking`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.users).toHaveLength(2);
        expect(response.body.users[0].username).toBe("bruno08nunes");
    });
});
