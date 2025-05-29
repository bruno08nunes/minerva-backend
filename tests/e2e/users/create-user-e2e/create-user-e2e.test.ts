import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Register User Route", () => {
    it("should be able to register user", async () => {
        const response = await request(app).post("/register").send({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("token");
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("User created successfully.");
        expect(response.body.user).toMatchObject({
            name: "Bruno Nunes",
            email: "bruno@email.com",
        });
        expect(typeof response.body.token).toBe("string");

        const cookies = response.headers["set-cookie"];
        expect(cookies).toEqual(
            expect.arrayContaining([expect.stringContaining("refreshToken=")])
        );

        const userInDb = await userRepository.findByEmail("bruno@email.com");
        expect(userInDb).not.toBeNull();
    });
});