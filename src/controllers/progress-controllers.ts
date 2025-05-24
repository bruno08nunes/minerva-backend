import { Request, Response } from "express";
import { ProgressServices } from "../services/progress-services";
import { PrismaProgressRepository } from "../repositories/prisma/prisma-progress-repository";
import { z } from "zod";

const service = new ProgressServices(new PrismaProgressRepository());

export async function getProgressController(req: Request, res: Response) {
    const getProgressQuerySchema = z.object({
        userId: z.string().uuid(),
        lessonId: z.string().uuid()
    });

    const { userId, lessonId } = getProgressQuerySchema.parse(req.query);

    const progress = await service.find(userId, lessonId);

    res.json({
        message: "Progress found.",
        success: true,
        data: { lastTry: progress.lastTry, isCompleted: progress.isCompleted },
    });
}

export async function progressController(req: Request, res: Response) {
    const createProgressBodySchema = z.object({
        userId: z.string().uuid(),
        lessonId: z.string().uuid(),
        isCompleted: z.boolean(),
    });

    const { userId, lessonId, isCompleted } = createProgressBodySchema.parse(
        req.body
    );

    const progress = await service.progress({ userId, lessonId, isCompleted });

    res.json({
        message: "Progress updated successfully.",
        success: true,
        data: { lastTry: progress.lastTry, isCompleted: progress.isCompleted },
    });
}
