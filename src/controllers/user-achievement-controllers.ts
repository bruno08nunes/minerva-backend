import { Request, Response } from "express";
import { PrismaUserAchievementsRepository } from "../repositories/prisma/prisma-user-achievements-repository";
import { UserAchievementServices } from "../services/user-achievement-services";
import NotFoundError from "../utils/errors/not-found";

const service = new UserAchievementServices(
    new PrismaUserAchievementsRepository()
);

export async function listUserAchievementsController(
    req: Request,
    res: Response
) {
    const { userId } = req.params;

    const userAchievements = await service.listUserAchievements(userId);

    res.json({
        data: userAchievements,
        message: "User achievements listed successfully.",
        success: true,
    });
}

export async function createUserAchievementController(
    req: Request,
    res: Response
) {
    const { userId, achievementId } = req.body;

    const userAchievement = await service.createUserAchievement(
        userId,
        achievementId
    );

    res.json({
        data: userAchievement,
        message: "User achievement created successfuly.",
        success: true,
    });
}

export async function deleteUserAchievementController(
    req: Request,
    res: Response
) {
    const { userId, achievementId } = req.body;

    try {
        const userAchievement = await service.deleteUserAchievement(
            userId,
            achievementId
        );

        res.json({
            data: userAchievement,
            message: "User achievement deleted successfuly.",
            success: true,
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: "Resource not found.",
                success: false,
            });
        }

        throw err;
    }
}
