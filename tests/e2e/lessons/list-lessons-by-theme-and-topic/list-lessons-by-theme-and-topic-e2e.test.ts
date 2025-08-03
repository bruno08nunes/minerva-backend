import request from "supertest";
import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaThemesRepository } from "../../../../src/repositories/prisma/prisma-themes-repository";
import { PrismaTopicsRepository } from "../../../../src/repositories/prisma/prisma-topics-repository";
import { PrismaLessonsRepository } from "../../../../src/repositories/prisma/prisma-lessons-repository";

const topicRepository = new PrismaTopicsRepository();
const themeRepository = new PrismaThemesRepository();
const iconRepository = new PrismaIconsRepository();
const lessonRepository = new PrismaLessonsRepository();

describe("[e2e] List Lesson By Theme And Topic Route", () => {
    it("should be able to list lessons by theme and topic", async () => {
        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const { id: topicId } = await topicRepository.create({
            name: "Topic 1",
            description: "Description for Topic 1",
            slug: "topic-1",
            iconId,
            order: 1,
        });

        const { id: themeId } = await themeRepository.create({
            name: "Theme 1",
            description: "Description for Theme 1",
            slug: "theme-1",
            iconId,
        });

        await lessonRepository.create({
            name: "Lesson 1",
            description: "Description for Lesson 1",
            rewardXP: 100,
            order: 1,
            topicId,
            themeId,
            iconId,
        });

        const response = await request(app)
            .get("/lessons/list")
            .query({ topicId, themeId });

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Lessons listed successfully.");
        expect(response.body.data).toBeInstanceOf(Array);
        expect(response.body.data.length).toBeGreaterThan(0);
    });
});
