import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";
import { UserService } from "../../../../src/services/user-services";

const userRepository = new PrismaUsersRepository();
const userService = new UserService(userRepository);

describe("[e2e] Delete User Route", () => {
    it("should be able to delete user profile", async () => {
        const { id } = await userService.createUser({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        const response = await request(app).delete(`/users/${id}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);

        const userInDb = await userRepository.findByEmail("bruno@email.com");
        expect(userInDb).toBeNull();
    });
});
