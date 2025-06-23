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
    it("should not be able to update a topic without being ADMIN", async () => {
        const icon = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const topic = await topicRepository.create({
            name: "Test Topic",
            description: "This is a test topic",
            iconId: icon.id,
            slug: "test-topic",
        });

        const updatedTopicData = {
            name: "Updated Test Topic",
            description: "This is an updated test topic",
            iconId: icon.id,
        };

        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        const token = signJwt({ id: id, role: role });

        const response = await request(app)
            .put(`/topics/${topic.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send(updatedTopicData);

        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Access denied: Admins only");
    }); 

    it("should not be able to update a topic without authorization", async () => {
        const icon = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const topic = await topicRepository.create({
            name: "Test Topic",
            description: "This is a test topic",
            iconId: icon.id,
            slug: "test-topic-2",
        });

        const updatedTopicData = {
            name: "Updated Test Topic",
            description: "This is an updated test topic",
            iconId: icon.id,
        };

        const response = await request(app)
            .put(`/topics/${topic.id}`)
            .send(updatedTopicData);

        expect(response.status).toBe(401);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Token not provided");
    });

    it("should not be able to update a topic with invalid token", async () => {
        const icon = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const topic = await topicRepository.create({
            name: "Test Topic",
            description: "This is a test topic",
            iconId: icon.id,
            slug: "test-topic-3",
        });

        const updatedTopicData = {
            name: "Updated Test Topic",
            description: "This is an updated test topic",
            iconId: icon.id,
        };

        const token = "invalid-token";

        const response = await request(app)
            .put(`/topics/${topic.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send(updatedTopicData);

        expect(response.status).toBe(403);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Invalid token");
    });
});