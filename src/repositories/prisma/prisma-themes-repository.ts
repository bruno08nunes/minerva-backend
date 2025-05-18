import { prisma } from "../../lib/prisma";
import { IThemesRepository } from "../themes-repository";

export class PrismaThemesRepository implements IThemesRepository {
    async findById(id: string) {
        return await prisma.theme.findUnique({
            where: { id },
        });
    }

    async create(theme: { name: string; iconId: string; description: string }) {
        return await prisma.theme.create({
            data: {
                name: theme.name,
                description: theme.description,
                icon: { connect: { id: theme.iconId } },
            },
        });
    }

    async update(
        id: string,
        theme: { name?: string; iconId?: string; description?: string }
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
        return await prisma.theme.findMany();
    }
}
