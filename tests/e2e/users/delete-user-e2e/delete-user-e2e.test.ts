import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";
import { UserService } from "../../../../src/services/user-services";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();
const userService = new UserService(userRepository);

describe("[e2e] Delete User Route", () => {
    it("should be able to delete user profile", async () => {
        const { id, role } = await userService.createUser({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        const token = signJwt({ id: id, role: role });

        const response = await request(app)
            .delete(`/users`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);

        const userInDb = await userRepository.findByEmail("bruno@email.com");
        expect(userInDb).toBeNull();
    });
});
