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
    it("should be able to create a topic", async () => {
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

        const response = await request(app)
            .post("/topics")
            .set("Authorization", `Bearer ${token}`)
            .send({
                name: "Lorem",
                description: "Lorem ipsum dolor.",
                iconId: iconId,
                slug: "lorem",
                order: 1
            });

        expect(response.status).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Topic created successfully");
    });
});