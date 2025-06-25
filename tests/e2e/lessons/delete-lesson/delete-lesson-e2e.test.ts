import request from "supertest";
import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaThemesRepository } from "../../../../src/repositories/prisma/prisma-themes-repository";
import { PrismaTopicsRepository } from "../../../../src/repositories/prisma/prisma-topics-repository";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";
import { PrismaLessonsRepository } from "../../../../src/repositories/prisma/prisma-lessons-repository";

const userRepository = new PrismaUsersRepository();
const topicRepository = new PrismaTopicsRepository();
const themeRepository = new PrismaThemesRepository();
const iconRepository = new PrismaIconsRepository();
const lessonRepository = new PrismaLessonsRepository();

describe("[e2e] Delete Lesson Route", () => {
    it("should be able to delete a lesson", async () => {
        const { id: userId } = await userRepository.create({
            name: "John Doe",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            role: "ADMIN",
        });

        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const { id: topicId } = await topicRepository.create({
            name: "Topic 1",
            description: "Description for Topic 1",
            slug: "topic-1",
            iconId,
        });

        const { id: themeId } = await themeRepository.create({
            name: "Theme 1",
            description: "Description for Theme 1",
            slug: "theme-1",
            iconId,
        });

        const token = signJwt({ id: userId, role: "ADMIN" });

        const { id: lessonId } = await lessonRepository.create({
            name: "Lesson 1",
            description: "Description for Lesson 1",
            rewardXP: 100,
            order: 1,
            topicId,
            themeId,
            iconId,
        });

        const response = await request(app)
            .delete(`/lessons/${lessonId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Lesson deleted successfully.");
        const deletedLesson = await lessonRepository.findById(lessonId);
        expect(deletedLesson).toBeNull();
    });
});
