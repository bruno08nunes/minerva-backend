import request from "supertest";
import app from "../../../../src/app";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Delete Lesson Route", () => {
    it("should not be able to delete a lesson that does not exist", async () => {
        const { id: userId } = await userRepository.create({
            name: "John Doe",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            role: "ADMIN",
        });
        
        const token = signJwt({ id: userId, role: "ADMIN" });

        const response = await request(app)
            .delete("/lessons/00000000-0000-0000-0000-000000000000")
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Resource not found.");
    });
});
