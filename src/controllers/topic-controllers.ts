import { PrismaTopicsRepository } from './../repositories/prisma/prisma-topics-repository';
import { Request, Response } from "express";
import { z } from "zod";
import { TopicService } from "../services/topic-services";
import BadRequestError from "../utils/errors/bad-request-error";
import NotFoundError from "../utils/errors/not-found";

const topicService = new TopicService(new PrismaTopicsRepository());

export async function createTopicController(req: Request, res: Response) {
    const createTopicBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        iconId: z.string().uuid(),
    });

    const data = createTopicBodySchema.parse(req.body);

    const topic = await topicService.createTopic(data);

    res.status(201).json({
        message: "Topic created succesfuly",
        success: true,
        data: topic,
    });
}

export async function updateTopicController(req: Request, res: Response) {
    try {
        const updateTopicBodySchema = z.object({
            name: z.string().optional(),
            description: z.string().optional(),
            id: z.string().uuid(),
        });

        const data = updateTopicBodySchema.parse({
            ...req.body,
            ...req.params,
        });

        const topic = await topicService.updateTopic(data.id, {
            name: data.name,
            description: data.description,
        });

        res.status(200).json({
            message: "Topic updated succesfuly",
            success: true,
            data: topic,
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

export async function deleteTopicController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const topic = await topicService.deleteTopic(id);

        res.status(200).json({
            message: "Topic deleted succesfuly.",
            success: true,
            data: topic
        });
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.status(404).json({
                message: err.message ?? "Resource not found.",
                success: false
            });
        }

        throw err;
    }
}

export async function listTopicController(req: Request, res: Response) {
    const topics = await topicService.listTopics();

    res.status(200).json({
        message: "Topics listed succesfuly.",
        success: true,
        data: topics
    });
}