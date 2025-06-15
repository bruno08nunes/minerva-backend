import { prisma } from "../../lib/prisma";
import { CreateChoiceType, IChoicesRepository } from "../choice-repository";

export class PrismaChoicesRepository implements IChoicesRepository {
    async findById(id: string) {
        const choice = await prisma.choice.findUnique({
            where: { id },
        });

        if (!choice) {
            return null;
        }

        return choice;
    }

    async listByExercise(exerciseId: string) {
        return prisma.choice.findMany({
            where: { exerciseId },
            orderBy: { order: "asc" },
        });
    }

    async create(data: CreateChoiceType) {
        return prisma.choice.create({ data });
    }

    async update(
        id: string,
        data: { text?: string; order?: number; isCorrect?: boolean }
    ) {
        return prisma.choice.update({
            where: { id },
            data,
        });
    }

    async delete(id: string) {
        return prisma.choice.delete({ where: { id } });
    }
}
