import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaTopicsRepository } from "../../../../src/repositories/prisma/prisma-topics-repository";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import { signJwt } from "../../../../src/utils/jwt";

const topicRepository = new PrismaTopicsRepository();
const iconRepository = new PrismaIconsRepository();
const userRepository = new PrismaUsersRepository();

describe("[e2e] Get Topic By Slug Route", () => {
    it("should be able to get a topic by slug", async () => {
        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const theme = await topicRepository.create({
            name: "Test Topic",
            description: "This is a test topic",
            iconId: iconId,
            slug: "test-topic",
        });

        const response = await request(app).get(`/topics/${theme.slug}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: "Topic found successfully.",
            success: true,
            data: {
                id: theme.id,
                name: theme.name,
                description: theme.description,
                iconId: theme.iconId,
                slug: theme.slug,
            },
        });
    });

    it("should not be able to find a topic with a non-existing slug", async () => {
        const response = await request(app).get("/topics/non-existing-slug");

        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            message: "Resource not found.",
            success: false,
        });
    });
});