import request from "supertest";
import { PrismaThemesRepository } from "../../../../src/repositories/prisma/prisma-themes-repository";
import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";

const themeRepository = new PrismaThemesRepository();
const iconRepository = new PrismaIconsRepository();

describe("[e2e] List Theme Route", () => {
    it("should be able to list all themes", async () => {
        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        await themeRepository.create({
            name: "Test Theme 1",
            description: "This is a test theme 1",
            iconId: iconId,
            slug: "test-theme-1",
        });

        await themeRepository.create({
            name: "Test Theme 2",
            description: "This is a test theme 2",
            iconId: iconId,
            slug: "test-theme-2",
        });

        const response = await request(app).get("/themes");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: "Themes listed successfully.",
            success: true,
            data: [
                {
                    id: expect.any(String),
                    name: "Test Theme 1",
                    description: "This is a test theme 1",
                    iconId: iconId,
                    slug: "test-theme-1",
                    icon: {
                        id: expect.any(String),
                        url: "https://example.com/icon.png",
                    }
                },
                {
                    id: expect.any(String),
                    name: "Test Theme 2",
                    description: "This is a test theme 2",
                    iconId: iconId,
                    slug: "test-theme-2",
                    icon: {
                        id: expect.any(String),
                        url: "https://example.com/icon.png",
                    }
                },
            ],
        });
    });
});
