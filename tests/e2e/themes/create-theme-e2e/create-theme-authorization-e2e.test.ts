import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";
import { PrismaThemesRepository } from "../../../../src/repositories/prisma/prisma-themes-repository";
import request from "supertest";
import app from "../../../../src/app";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";

const themeRepository = new PrismaThemesRepository();
const iconRepository = new PrismaIconsRepository();
const userRepository = new PrismaUsersRepository();

describe("[e2e] Create Theme Authorization Route", () => {
    it("should not be able to create a theme without being a ADMIN", async () => {
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
            .post("/themes")
            .set("Authorization", `Bearer ${token}`)
            .send({
                name: "Lorem",
                description: "Lorem ipsum dolor.",
                iconId: iconId,
                slug: "lorem",
            });

        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Access denied: Admins only");

        const themeInDb = await themeRepository.findBySlug("lorem");
        expect(themeInDb).toBeNull();
    });
    
    it("should not be able to create a theme without being logged", async () => {
        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const response = await request(app)
            .post("/themes")
            .send({
                name: "Lorem",
                description: "Lorem ipsum dolor.",
                iconId: iconId,
                slug: "lorem",
            });
            
            expect(response.status).toBe(401);
            expect(response.body.success).toBe(false);
            expect(response.body.message).toBe("Token not provided");
            
            const themeInDb = await themeRepository.findBySlug("lorem");
            expect(themeInDb).toBeNull();
        });

        it("should not be able to create a theme with invalid token", async () => {
            const { id: iconId } = await iconRepository.create({
                url: "https://example.com/icon.png",
            });

            const token = "invalid-token";
    
            const response = await request(app)
                .post("/themes")
                .set("Authorization", `Bearer ${token}`)
                .send({
                    name: "Lorem",
                    description: "Lorem ipsum dolor.",
                    iconId: iconId,
                    slug: "lorem",
                });
    
            expect(response.status).toBe(403);
            expect(response.body.message).toBe("Invalid token");
    
            const themeInDb = await themeRepository.findBySlug("lorem");
            expect(themeInDb).toBeNull();
        });
    });
    