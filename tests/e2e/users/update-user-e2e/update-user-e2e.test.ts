import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";
import { UserService } from "../../../../src/services/user-services";

const userRepository = new PrismaUsersRepository();
const userService = new UserService(userRepository);

describe("[e2e] Update User Route", () => {
    it("should be able to update user profile", async () => {
        const { id } = await userService.createUser({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        const response = await request(app).put(`/users/${id}`).send({
            username: "bruno",
        });

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.user).toMatchObject({
            name: "Bruno Nunes",
            username: "bruno",
        });

        const userInDb = await userRepository.findByEmail("bruno@email.com");
        expect(userInDb?.username).toBe("bruno");
    });
});
