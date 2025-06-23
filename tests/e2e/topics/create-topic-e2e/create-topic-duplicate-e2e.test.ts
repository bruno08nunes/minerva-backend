import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaTopicsRepository } from "../../../../src/repositories/prisma/prisma-topics-repository";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import { signJwt } from "../../../../src/utils/jwt";

const topicRepository = new PrismaTopicsRepository();
const iconRepository = new PrismaIconsRepository();
const userRepository = new PrismaUsersRepository();

describe("[e2e] Create Topic Route", () => {
    it("should not be able to create a topic with the same slug", async () => {
        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            role: "ADMIN",
        });

        const token = signJwt({ id: id, role: role });

        await request(app)
            .post("/topics")
            .set("Authorization", `Bearer ${token}`)
            .send({
                name: "Lorem",
                description: "Lorem ipsum dolor.",
                iconId: iconId,
                slug: "lorem",
            });

        const otherResponse = await request(app)
            .post("/topics")
            .set("Authorization", `Bearer ${token}`)
            .send({
                name: "Lorem",
                description: "Lorem ipsum dolor.",
                iconId: iconId,
                slug: "lorem",
            });

        expect(otherResponse.status).toBe(409);
        expect(otherResponse.body.success).toBe(false);
        expect(otherResponse.body.message).toBe("Topic with this slug already exists.");

        const themeInDb = await topicRepository.findBySlug("lorem");
        expect(themeInDb).not.toBeNull();
    });
});