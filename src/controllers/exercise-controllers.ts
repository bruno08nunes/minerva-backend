import { Request, Response } from "express";
import { ExerciseServices } from "../services/exercise-services";
import { PrismaExercisesRepository } from "../repositories/prisma/prisma-exercises-repository";
import NotFoundError from "../utils/errors/not-found";
import { z } from "zod";
import { $Enums } from "../generated/prisma";

const exerciseService = new ExerciseServices(new PrismaExercisesRepository());

export async function getExerciseByIdController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const exercise = await exerciseService.getExerciseById(id);

        if (!exercise) {
            throw new NotFoundError();
        }

        res.json({
            data: exercise,
            success: true,
            message: "Exercise found.",
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Exercise not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function listExercisesByLessonController(
    req: Request,
    res: Response
) {
    const { lessonId } = req.params;

    const exercises = await exerciseService.listExercisesByLesson(lessonId);

    res.json({
        data: exercises,
        success: true,
        message: "Exercises listed successfully.",
    });
}

export async function createExerciseController(req: Request, res: Response) {
    const createBodySchema = z.object({
        statement: z.string(),
        order: z.number().int(),
        type: z.nativeEnum($Enums.ExerciseType),
        hint: z.string(),
        lessonId: z.string().uuid(),
    });

    const data = createBodySchema.parse(req.body);

    const exercise = await exerciseService.createExercise(data);

    res.status(201).json({
        data: exercise,
        message: "Exercise created successfully.",
        success: true,
    });
}

export async function updateExerciseController(req: Request, res: Response) {
    const createBodySchema = z.object({
        statement: z.string().optional(),
        order: z.number().int().optional(),
        hint: z.string().optional(),
        id: z.string().uuid(),
    });

    const { id, ...data } = createBodySchema.parse({
        ...req.body,
        id: req.params.id,
    });

    try {
        const exercise = await exerciseService.updateExercise(id, data);

        res.json({
            message: "Exercise updated successfully.",
            success: true,
            data: exercise,
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Exercise not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function deleteExerciseController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const exercise = await exerciseService.deleteExercise(id);

        res.json({
            data: exercise,
            message: "Exercise deleted successfully.",
            success: true,
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Exercise not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}
