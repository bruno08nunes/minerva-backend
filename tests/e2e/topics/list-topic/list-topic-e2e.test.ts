import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaTopicsRepository } from "../../../../src/repositories/prisma/prisma-topics-repository";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";

const topicRepository = new PrismaTopicsRepository();
const iconRepository = new PrismaIconsRepository();

describe("[e2e] List Topics Route", () => {
    it("should be able to list all topics", async () => {
        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        await topicRepository.create({
            name: "Test Topic",
            description: "This is a test topic",
            iconId: iconId,
            slug: "test-topic",
        });

        await topicRepository.create({
            name: "Another Test Topic",
            description: "This is another test topic",
            iconId: iconId,
            slug: "another-test-topic",
        });

        const response = await request(app).get("/topics");

        expect(response.status).toBe(200);
        expect(response.body.message).toEqual("Topics listed successfully."),
        expect(response.body.success).toEqual(true);
        expect(response.body.data).toHaveLength(2);
    });
});