import request from "supertest";
import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaThemesRepository } from "../../../../src/repositories/prisma/prisma-themes-repository";
import { PrismaTopicsRepository } from "../../../../src/repositories/prisma/prisma-topics-repository";
import { PrismaExercisesRepository } from "../../../../src/repositories/prisma/prisma-exercises-repository";
import { PrismaLessonsRepository } from "../../../../src/repositories/prisma/prisma-lessons-repository";

const topicRepository = new PrismaTopicsRepository();
const themeRepository = new PrismaThemesRepository();
const iconRepository = new PrismaIconsRepository();
const lessonRepository = new PrismaLessonsRepository();
const exerciseRepository = new PrismaExercisesRepository();

describe("[e2e] List Exercises Route", () => {
    it("should be able to list exercises by lesson ID", async () => {
        const icon = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const topic = await topicRepository.create({
            name: "Topic 1",
            description: "Description for Topic 1",
            slug: "topic-1",
            iconId: icon.id,
            order: 1,
        });

        const theme = await themeRepository.create({
            name: "Theme 1",
            description: "Description for Theme 1",
            slug: "theme-1",
            iconId: icon.id,
        });

        const lesson = await lessonRepository.create({
            name: "Lesson 1",
            description: "Description for Lesson 1",
            rewardXP: 100,
            order: 1,
            topicId: topic.id,
            themeId: theme.id,
            iconId: icon.id,
        });

        const exercise1 = await exerciseRepository.create({
            content: [
                { type: "paragraph", data: "This is a paragraph." },
                { type: "code", data: "console.log('Hello, world!');" },
            ],
            lessonId: lesson.id,
            hint: "This is a hint for the exercise.",
            order: 1,
            type: "COMPLETE_CODE",
        });

        const exercise2 = await exerciseRepository.create({
            content: [
                { type: "paragraph", data: "This is another paragraph." },
                { type: "code", data: "console.log('Goodbye, world!');" },
            ],
            lessonId: lesson.id,
            hint: "This is another hint for the exercise.",
            order: 2,
            type: "COMPLETE_CODE",
        });

        const response = await request(app)
            .get(`/exercises/list/${lesson.id}`)
            .expect(200);

        expect(response.body).toHaveProperty("data");
        expect(response.body.data).toHaveLength(2);
        expect(response.body.data[0].id).toBe(exercise1.id);
        expect(response.body.data[1].id).toBe(exercise2.id);
    });
});
