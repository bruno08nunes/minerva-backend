import { Request, Response } from "express";
import { PrismaLessonsRepository } from "../repositories/prisma/prisma-lessons-repository";
import { LessonServices } from "../services/lesson-services";
import NotFoundError from "../utils/errors/not-found";
import { z } from "zod";

const lessonRepository = new PrismaLessonsRepository();
const service = new LessonServices(lessonRepository);

export async function getLessonByIdController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const lesson = await service.getLessonById(id);

        if (!lesson) {
            throw new NotFoundError();
        }

        res.json({
            message: "Lesson found.",
            success: true,
            data: lesson,
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Lesson not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function listLessonsController(req: Request, res: Response) {
    const lessons = await service.listAllLessons();

    res.json({
        message: "Lessons listed successfully.",
        success: true,
        data: lessons,
    });
}

export async function listLessonsByTopicAndThemeController(
    req: Request,
    res: Response
) {
    const listLessonsBodySchema = z.object({
        topicId: z.string(),
        themeId: z.string(),
    });

    const { topicId, themeId } = listLessonsBodySchema.parse(req.query);

    const userId = req.user?.id;

    const lessons = await service.listLessonsByTopicAndTheme(topicId, themeId, userId);

    res.json({
        message: "Lessons listed successfully.",
        success: true,
        data: lessons,
    });
}

export async function createLessonController(req: Request, res: Response) {
    const createBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        rewardXP: z.number().int(),
        order: z.number().int(),
        topicId: z.string().uuid(),
        themeId: z.string().uuid(),
        iconId: z.string().uuid(),
    });

    const data = createBodySchema.parse(req.body);

    const lesson = await service.createLesson(data);

    res.status(201).json({
        message: "Lesson created successfully.",
        success: true,
        data: lesson,
    });
}

export async function updateLessonController(req: Request, res: Response) {
    const updateBodySchema = z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        rewardXP: z.number().int().optional(),
        order: z.number().int().optional(),
        id: z.string().uuid(),
    });

    const { id, ...data } = updateBodySchema.parse({
        ...req.body,
        ...req.params,
    });

    try {
        const lesson = await service.updateLesson(id, data);

        res.json({
            message: "Lesson updated successfully.",
            success: true,
            data: lesson,
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Lesson not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function deleteLessonController(req: Request, res: Response) {
    const deleteBodySchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = deleteBodySchema.parse(req.params);

    try {
        const lesson = await service.deleteLesson(id);
    
        res.json({
            message: "Lesson deleted successfuly.",
            success: true,
            data: lesson
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Lesson not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}
