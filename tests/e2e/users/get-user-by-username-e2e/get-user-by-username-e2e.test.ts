import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";
import { UserService } from "../../../../src/services/user-services";

const userRepository = new PrismaUsersRepository();
const userService = new UserService(userRepository);

describe("[e2e] Get User By Username Route", () => {
    it("should be able to get user by username", async () => {
        await userService.createUser({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });
        
        const response = await request(app).get("/users/bruno08nunes");

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.user).toMatchObject({
            name: "Bruno Nunes",
            username: "bruno08nunes"
        });
    });
});