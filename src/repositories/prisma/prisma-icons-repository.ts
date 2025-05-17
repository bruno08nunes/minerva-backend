import { Icon } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { IIconsRepository } from "../icons-repository";

export class PrismaIconsRepository implements IIconsRepository {
    async create(data: Icon) {
        const icon = await prisma.icon.create({
            data,
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
