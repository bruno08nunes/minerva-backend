import request from "supertest";
import app from "../../../../src/app";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Delete Exercise Route", () => {
    it("should not be able to delete an exercise without being a admin", async () => {
        const { id: userId } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        const token = signJwt({ id: userId, role: "USER" });

        const response = await request(app)
            .delete(`/exercises/id`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Access denied: Admins only");
    });
    it("should not be able to delete an exercise with invalid token", async () => {
        const token = "invalid-token";

        const response = await request(app)
            .delete(`/exercises/id`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Invalid token");
    });

    it("should not be able to delete an exercise without token", async () => {
        const response = await request(app)
            .delete(`/exercises/id`);

        expect(response.status).toBe(401);
        expect(response.body.message).toBe("Token not provided");
    });
});