import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaTopicsRepository } from "../../../../src/repositories/prisma/prisma-topics-repository";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import { signJwt } from "../../../../src/utils/jwt";

const topicRepository = new PrismaTopicsRepository();
const iconRepository = new PrismaIconsRepository();
const userRepository = new PrismaUsersRepository();

describe("[e2e] Update Topic Route", () => {
    it("should not be able to update a topic with invalid values", async () => {
        const icon = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const topic = await topicRepository.create({
            name: "Test Topic",
            description: "This is a test topic",
            iconId: icon.id,
            slug: "test-topic",
            order: 1
        });

        const updatedTopicData = {};

        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            role: "ADMIN",
        });

        const token = signJwt({ id: id, role: role });

        const response = await request(app)
            .put(`/topics/${topic.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send(updatedTopicData);
        
        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Invalid values");
    });

    it("should not be able to update a topic with invalid id", async () => {
        const updatedTopicData = {
            name: "Updated Test Topic",
            description: "This is an updated test topic",
        };

        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno2@email.com",
            password: "admin123",
            username: "bruno08nunes2",
            role: "ADMIN",
        });

        const token = signJwt({ id: id, role: role });

        const response = await request(app)
            .put(`/topics/invalid-id`)
            .set("Authorization", `Bearer ${token}`)
            .send(updatedTopicData);

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });
});