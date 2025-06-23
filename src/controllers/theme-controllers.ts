import { Request, Response } from "express";
import { z } from "zod";
import { ThemeService } from "../services/theme-services";
import { PrismaThemesRepository } from "../repositories/prisma/prisma-themes-repository";
import BadRequestError from "../utils/errors/bad-request-error";
import NotFoundError from "../utils/errors/not-found";
import ThemeAlreadyExistsError from "../utils/errors/theme-already-exists";

const themeService = new ThemeService(new PrismaThemesRepository());

export async function getThemeBySlugController(req: Request, res: Response) {
    const { slug } = req.params;

    try {
        const theme = await themeService.getThemeBySlug(slug);

        res.status(200).json({
            message: "Theme found successfully.",
            success: true,
            data: theme,
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message ?? "Resource not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function createThemeController(req: Request, res: Response) {
    const createThemeBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        iconId: z.string().uuid(),
        slug: z.string().optional(),
    });

    const data = createThemeBodySchema.parse(req.body);

    try {
        const theme = await themeService.createTheme(data);

        res.status(201).json({
            message: "Theme created successfully",
            success: true,
            data: theme,
        });
    } catch (err) {
        if (err instanceof ThemeAlreadyExistsError) {
            res.status(409).json({
                message: err.message || "Theme already exists.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function updateThemeController(req: Request, res: Response) {
    try {
        const updateThemeBodySchema = z.object({
            name: z.string().optional(),
            description: z.string().optional(),
            slug: z.string().optional(),
            id: z.string().uuid(),
        });

        const data = updateThemeBodySchema.parse({
            ...req.body,
            ...req.params,
        });

        const theme = await themeService.updateTheme(data.id, {
            name: data.name,
            description: data.description,
            slug: data.slug,
        });

        res.status(200).json({
            message: "Theme updated successfully",
            success: true,
            data: theme,
        });
    } catch (err) {
        if (err instanceof BadRequestError) {
            res.status(400).json({
                message: "Invalid values",
                success: false,
            });
            return;
        }

        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message ?? "Resource not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function deleteThemeController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const theme = await themeService.deleteTheme(id);

        res.status(200).json({
            message: "Theme deleted successfully.",
            success: true,
            data: theme,
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message ?? "Resource not found.",
                success: false,
            });
        }

        throw err;
    }
}

export async function listThemeController(req: Request, res: Response) {
    const themes = await themeService.listThemes();

    res.status(200).json({
        message: "Themes listed successfully.",
        success: true,
        data: themes,
    });
}
