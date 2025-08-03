import request from "supertest";
import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaThemesRepository } from "../../../../src/repositories/prisma/prisma-themes-repository";
import { PrismaTopicsRepository } from "../../../../src/repositories/prisma/prisma-topics-repository";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";
import { PrismaExercisesRepository } from "../../../../src/repositories/prisma/prisma-exercises-repository";
import { PrismaLessonsRepository } from "../../../../src/repositories/prisma/prisma-lessons-repository";

const userRepository = new PrismaUsersRepository();
const topicRepository = new PrismaTopicsRepository();
const themeRepository = new PrismaThemesRepository();
const iconRepository = new PrismaIconsRepository();
const lessonRepository = new PrismaLessonsRepository();
const exerciseRepository = new PrismaExercisesRepository();

describe("[e2e] Delete Exercise Route", () => {
    it("should be able to delete an exercise", async () => {
        const { id: userId } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

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

        const lesson = await lessonRepository.create({
            name: "Lesson 1",
            description: "Description for Lesson 1",
            rewardXP: 100,
            order: 1,
            topicId,
            themeId,
            iconId,
        });

        const token = signJwt({ id: userId, role: "ADMIN" });

        const exercise = await exerciseRepository.create({
            content: [
                { type: "paragraph", data: "This is a paragraph." },
                { type: "code", data: "console.log('Hello, world!');" },
            ],
            order: 1,
            type: "COMPLETE_CODE",
            hint: "This is a hint for the exercise.",
            lessonId: lesson.id,
        });

        const response = await request(app)
            .delete(`/exercises/${exercise.id}`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toEqual("Exercise deleted successfully.");
        expect(response.body.success).toEqual(true);
        const deletedExercise = await exerciseRepository.findById(exercise.id);
        expect(deletedExercise).toBeNull();
    });
});
