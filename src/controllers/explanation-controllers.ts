import { Request, Response } from "express";
import { ExplanationServices } from "../services/explanation-services";
import { PrismaExplanationRepository } from "../repositories/prisma/prisma-explanation-repository";
import NotFoundError from "../utils/errors/not-found";
import { z } from "zod";

const explanationService = new ExplanationServices(
    new PrismaExplanationRepository()
);

export async function getExplanationByIdController(
    req: Request,
    res: Response
) {
    const { id } = req.params;

    try {
        const explanation = await explanationService.getExplanationById(id);

        if (!explanation) {
            throw new NotFoundError();
        }

        res.json({
            data: explanation,
            success: true,
            message: "Explanation found.",
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Explanation not found.",
                success: false,
            });
            return;
        }

        throw err;
    }
}

export async function listExplanationsController(req: Request, res: Response) {
    const explanations = await explanationService.listExplanations();

    res.json({
        data: explanations,
        success: true,
        message: "Explanations listed successfully.",
    });
}

export async function listExplanationsByTopicController(
    req: Request,
    res: Response
) {
    const { topicId } = req.params;

    const explanations = await explanationService.listExplanationsByTopic(
        topicId
    );

    res.json({
        data: explanations,
        success: true,
        message: "Explanations listed successfully.",
    });
}

export async function createExplanationController(req: Request, res: Response) {
    const createBodySchema = z.object({
        title: z.string(),
        content: z.array(
            z.object({
                type: z.enum(["paragraph", "code", "image"]),
                data: z.string(),
            })
        ),
        topicId: z.string().uuid(),
        description: z.string(),
    });

    const data = createBodySchema.parse(req.body);

    const explanation = await explanationService.createExplanation(data);

    res.status(201).json({
        data: explanation,
        message: "Explanation created successfully.",
        success: true,
    });
}

export async function updateExplanationController(req: Request, res: Response) {
    const updateBodySchema = z.object({
        title: z.string().optional(),
        content: z
            .array(
                z.object({
                    type: z.enum(["paragraph", "code", "image"]),
                    data: z.string(),
                })
            )
            .optional(),
        topicId: z.string().uuid().optional(),
        description: z.string().optional(),
        id: z.string().uuid(),
    });

    const { id, ...data } = updateBodySchema.parse({
        ...req.body,
        ...req.params,
    });

    try {
        const explanation = await explanationService.updateExplanation(
            id,
            data
        );

        res.json({
            message: "Explanation updated successfully.",
            success: true,
            data: explanation,
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message || "Explanation not found.",
                success: false,
            });
        }

        throw err;
    }
}

export async function deleteExplanationController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const explanation = await explanationService.deleteExplanation(id);

        res.json({
            message: "Explanation deleted successfully.",
            success: true,
            data: explanation,
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.json({
                message: err.message || "Explanation not found.",
                success: false,
            });
        }

        throw err;
    }
}
