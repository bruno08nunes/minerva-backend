import { z } from "zod";
import { CreateAchievementType } from "../repositories/achievements-repository";
import { PrismaAchievementsRepository } from "../repositories/prisma/prisma-achievements-repository";
import { AchievementServices } from "../services/achievement-services";
import NotFoundError from "../utils/errors/not-found";
import { Request, Response } from "express";

const achievementService = new AchievementServices(
    new PrismaAchievementsRepository()
);

export async function getAchievementById(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const achievement = await achievementService.getAchievementById(id);

        if (!achievement) {
            throw new NotFoundError();
        }

        res.json({
            data: achievement,
            success: true,
            message: "Achievement retrieved successfully.",
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Achievement not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function listAchievements(req: Request, res: Response) {
    const userId = req.user?.id;

    const achievements = await achievementService.listAchievements(userId);

    res.json({
        data: achievements,
        success: true,
        message: "Achievements listed successfully.",
    });
}

export async function createAchievement(req: Request, res: Response) {
    const createBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        iconId: z.string().uuid(),
    });

    const achievementData = createBodySchema.parse(req.body);

    const newAchievement = await achievementService.createAchievement(
        achievementData
    );

    res.status(201).json({
        data: newAchievement,
        success: true,
        message: "Achievement created successfully.",
    });
}

export async function updateAchievement(req: Request, res: Response) {
    const { id } = req.params;

    const updateBodySchema = z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        iconId: z.string().uuid().optional(),
    });

    const updateData = updateBodySchema.parse(req.body);

    try {
        const updatedAchievement = await achievementService.updateAchievement(
            id,
            updateData
        );

        res.json({
            data: updatedAchievement,
            success: true,
            message: "Achievement updated successfully.",
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Achievement not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function deleteAchievement(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const deletedAchievement = await achievementService.deleteAchievement(id);

        res.json({
            data: deletedAchievement,
            success: true,
            message: "Achievement deleted successfully.",
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Achievement not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}