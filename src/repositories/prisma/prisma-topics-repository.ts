import { ITopicRepository } from "../topics-repository";
import { prisma } from "../../lib/prisma";

export class PrismaTopicsRepository implements ITopicRepository {
    async findById(id: string) {
        return await prisma.topic.findUnique({
            where: { id },
        });
    }

    async findBySlug(slug: string) {
        return await prisma.topic.findUnique({
            where: { slug },
        });
    }

    async create(topic: { name: string; iconId: string; description: string, slug: string }) {
        return await prisma.topic.create({
            data: {
                name: topic.name,
                description: topic.description,
                icon: { connect: { id: topic.iconId } },
                slug: topic.slug
            },
        });
    }

    async update(
        id: string,
        topic: { name?: string; iconId?: string; description?: string, slug?: string }
    ) {
        return await prisma.topic.update({
            where: { id },
            data: topic,
        });
    }

    async delete(id: string) {
        return await prisma.topic.delete({
            where: { id },
        });
    }

    async list() {
        return await prisma.topic.findMany({
            include: {
                icon: true,
            },
        });
    }
}
