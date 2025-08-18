import { Prisma } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { IIconsRepository } from "../icons-repository";

export class PrismaIconsRepository implements IIconsRepository {
    async findById(id: string) {
        const icon = await prisma.icon.findUnique({
            where: { id },
        });

        if (!icon) {
            return null;
        }

        return icon;
    }

    async create(data: Prisma.IconCreateInput) {
        const icon = await prisma.icon.create({
            data,
        });
        return icon;
    }

    async edit(id: string, data: { url?: string; description?: string }) {
        const icon = await prisma.icon.update({
            where: {
                id,
            },
            data: { url: data.url },
        });

        return icon;
    }

    async delete(id: string) {
        const icon = await prisma.icon.delete({
            where: { id },
        });
        return icon;
    }

    async list() {
        const icons = await prisma.icon.findMany();
        return icons;
    }
}
