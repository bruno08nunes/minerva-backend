import request from "supertest";
import { PrismaThemesRepository } from "../../../../src/repositories/prisma/prisma-themes-repository";
import app from "../../../../src/app";
import { PrismaIconsRepository } from "../../../../src/repositories/prisma/prisma-icons-repository";

const themeRepository = new PrismaThemesRepository();
const iconRepository = new PrismaIconsRepository();

describe("[e2e] Get Theme By Slug Route", () => {
    it("should be able", async () => {
        const { id: iconId } = await iconRepository.create({
            url: "https://example.com/icon.png",
        });

        const theme = await themeRepository.create({
            name: "Test Theme",
            description: "This is a test theme",
            iconId: iconId,
            slug: "test-theme",
        });

        const response = await request(app).get(`/themes/${theme.slug}`);
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: "Theme found successfully.",
            success: true,
            data: {
                id: theme.id,
                name: theme.name,
                description: theme.description,
                iconId: theme.iconId,
                slug: theme.slug
            },
        });
    });

    it("should not be able to find a theme with a non-existing slug", async () => {
        const response = await request(app).get("/themes/non-existing-slug");

        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            message: "Resource not found.",
            success: false,
        });
    });
});
