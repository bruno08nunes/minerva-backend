import request from "supertest";
import app from "../../../../src/app";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Register User Route - Duplicate Email", () => {
    it("should not allow duplicate email", async () => {
        await request(app).post("/register").send({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        const response = await request(app).post("/register").send({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes2",
        });

        expect(response.status).toBe(409);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toMatch("User already exists.");
    });
});
