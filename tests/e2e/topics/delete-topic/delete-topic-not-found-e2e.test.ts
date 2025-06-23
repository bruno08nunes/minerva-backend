import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaTopicsRepository } from "../../../../src/repositories/prisma/prisma-topics-repository";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import { signJwt } from "../../../../src/utils/jwt";

const topicRepository = new PrismaTopicsRepository();
const iconRepository = new PrismaIconsRepository();
const userRepository = new PrismaUsersRepository();

describe("[e2e] Delete Topic Route", () => {
    it("should return 404 when trying to delete a non-existent topic", async () => {
        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            role: "ADMIN",
        });

        const token = signJwt({ id: id, role: role });

        const response = await request(app)
            .delete(`/topics/non-existent-topic-id`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Resource not found.");
    });
});