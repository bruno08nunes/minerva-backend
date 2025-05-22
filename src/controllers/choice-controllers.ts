import { PrismaChoicesRepository } from "../repositories/prisma/prisma-choices-repository";
import { ChoiceServices } from "../services/choice-services";
import { Request, Response } from "express";
import NotFoundError from "../utils/errors/not-found";
import { z } from "zod";

const choiceService = new ChoiceServices(new PrismaChoicesRepository());

export async function getChoiceByIdController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const choice = await choiceService.getChoiceById(id);

        if (!choice) {
            throw new NotFoundError();
        }

        res.json({
            data: choice,
            success: true,
            message: "Choice found.",
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Choice not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function listChoicesByExerciseController(
    req: Request,
    res: Response
) {
    const { exerciseId } = req.params;

    const choices = await choiceService.listChoicesByExercise(exerciseId);

    res.json({
        data: choices,
        success: true,
        message: "Choices listed successfully.",
    });
}

export async function createChoiceController(req: Request, res: Response) {
    const createBodySchema = z.object({
        text: z.string(),
        isCorrect: z.boolean(),
        order: z.number().int(),
        exerciseId: z.string().uuid(),
    });

    const { text, isCorrect, order, exerciseId } = createBodySchema.parse(
        req.body
    );

    const choice = await choiceService.createChoice({
        text,
        isCorrect,
        order,
        exerciseId,
    });

    res.status(201).json({
        data: choice,
        success: true,
        message: "Choice created successfully.",
    });
}

export async function updateChoiceController(req: Request, res: Response) {
    const createBodySchema = z.object({
        text: z.string().optional(),
        isCorrect: z.boolean().optional(),
        order: z.number().int().optional(),
        id: z.string().uuid(),
    });

    const { text, isCorrect, order, id } = createBodySchema.parse({
        ...req.body,
        ...req.params,
    });

    try {
        const choice = await choiceService.getChoiceById(id);

        if (!choice) {
            throw new NotFoundError();
        }

        const updatedChoice = await choiceService.updateChoice(id, {
            text,
            isCorrect,
            order,
        });

        res.json({
            data: updatedChoice,
            success: true,
            message: "Choice updated successfully.",
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Choice not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function deleteChoiceController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const choice = await choiceService.getChoiceById(id);

        if (!choice) {
            throw new NotFoundError();
        }

        const deletedChoice = await choiceService.deleteChoice(id);

        res.json({
            success: true,
            message: "Choice deleted successfully.",
            data: deletedChoice,
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Choice not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}
