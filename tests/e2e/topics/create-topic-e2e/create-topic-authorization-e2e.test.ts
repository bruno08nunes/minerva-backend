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
    it("should not be able to create a topic without being a ADMIN", async () => {
        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
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

        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Access denied: Admins only");
    });

    it("should not be able to create a topic without being logged", async () => {
        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const response = await request(app)
            .post("/topics")
            .send({
                name: "Lorem",
                description: "Lorem ipsum dolor.",
                iconId: iconId,
                slug: "lorem",
                order: 1
            });

        expect(response.status).toBe(401);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Token not provided");
    });

    it("should not be able to create a theme with invalid token", async () => {
        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const token = "invalid-token";

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

        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Invalid token");
    });
});