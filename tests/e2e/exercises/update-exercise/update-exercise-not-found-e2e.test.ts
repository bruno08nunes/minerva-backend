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

describe("[e2e] Update Exercise Route", () => {
    it("should not be able to update an exercise with invalid id", async () => {
        const { id: userId } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        const token = signJwt({ id: userId, role: "ADMIN" });

        const updateData = {
            content: [
                { type: "paragraph", data: "Updated paragraph content." },
                { type: "code", data: "console.log('Updated code!');" },
            ],
            order: 2,
            type: "COMPLETE_CODE",
            hint: "Updated hint for the exercise.",
        };

        const response = await request(app)
            .put(`/exercises/03405251-ceb4-48f1-8365-ee83246d9b87`)
            .set("Authorization", `Bearer ${token}`)
            .send(updateData);

        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            message: "Resource not found.",
            success: false,
        });
    });
});