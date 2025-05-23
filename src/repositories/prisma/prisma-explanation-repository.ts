import { prisma } from "../../lib/prisma";
import {
    CreateExplanationType,
    IExplanationRepository,
} from "../explanation-repository";

export class PrismaExplanationRepository implements IExplanationRepository {
    async findById(id: string) {
        const exercise = await prisma.explanation.findUnique({
            where: { id },
        });

        if (!exercise) {
            return null;
        }

        return exercise;
    }

    async list() {
        return prisma.explanation.findMany();
    }

    async listByTopic(topicId: string) {
        return prisma.explanation.findMany({ where: { topicId } });
    }

    async create(data: CreateExplanationType) {
        return prisma.explanation.create({ data });
    }

    async update(id: string, data: CreateExplanationType) {
        return prisma.explanation.update({ where: { id }, data });
    }

    async delete(id: string) {
        return prisma.explanation.delete({ where: { id } });
    }
}
