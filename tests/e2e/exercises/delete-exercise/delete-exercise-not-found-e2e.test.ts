import request from "supertest";
import app from "../../../../src/app";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Delete Exercise Route", () => {
    it("should be able to delete an exercise", async () => {
        const { id: userId, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            role: "ADMIN",
        });

        const token = signJwt({ id: userId, role });

        const response = await request(app)
            .delete(`/exercises/not-existing-id`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            message: "Resource not found.",
            success: false
        });
    });
});
