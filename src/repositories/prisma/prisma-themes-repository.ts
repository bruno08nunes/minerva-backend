import { prisma } from "../../lib/prisma";
import { IThemesRepository } from "../themes-repository";

export class PrismaThemesRepository implements IThemesRepository {
    async findById(id: string) {
        return await prisma.theme.findUnique({
            where: { id },
        });
    }

    async findBySlug(slug: string) {
        return await prisma.theme.findUnique({
            where: { slug },
        });
    }

    async create(theme: { name: string; iconId: string; description: string, slug: string }) {
        return await prisma.theme.create({
            data: {
                name: theme.name,
                description: theme.description,
                icon: { connect: { id: theme.iconId } },
                slug: theme.slug
            }
        });
    }

    async update(
        id: string,
        theme: { name?: string; iconId?: string; description?: string, slug?: string }
    ) {
        return await prisma.theme.update({
            where: { id },
            data: theme,
        });
    }

    async delete(id: string) {
        return await prisma.theme.delete({
            where: { id },
        });
    }

    async list() {
        return await prisma.theme.findMany({
            include: {
                icon: true
            }
        });
    }
}
