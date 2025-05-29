import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";
import { UserService } from "../../../../src/services/user-services";

const userRepository = new PrismaUsersRepository();
const userService = new UserService(userRepository);

describe("[e2e] Login User Route", () => {
    it("should not be able to login user with invalid email or password", async () => {
        await userService.createUser({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });
        
        const response = await request(app).post("/login").send({
            email: "bruno",
            password: "admin123",
        });

        const response2 = await request(app).post("/login").send({
            email: "bruno@email.com",
            password: "admin",
        });

        expect(response.status).toBe(400);
        expect(response2.status).toBe(400);
        expect(response.body.success).toBe(false);
        expect(response2.body.success).toBe(false);
    });
});