import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";
import { UserService } from "../../../../src/services/user-services";

const userRepository = new PrismaUsersRepository();
const userService = new UserService(userRepository);

describe("[e2e] Login User Route", () => {
    it("should be able to login user", async () => {
        await userService.createUser({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });
        
        const response = await request(app).post("/login").send({
            email: "bruno@email.com",
            password: "admin123",
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("token");
        expect(response.body.success).toBe(true);
        expect(response.body.user).toMatchObject({
            name: "Bruno Nunes",
        });
        expect(typeof response.body.token).toBe("string");

        const cookies = response.headers["set-cookie"];
        expect(cookies).toEqual(
            expect.arrayContaining([expect.stringContaining("refreshToken=")])
        );
    });
});