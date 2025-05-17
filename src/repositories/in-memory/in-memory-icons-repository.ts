import { randomUUID } from 'node:crypto';
import { Icon, Prisma } from "../../generated/prisma";
import { IIconsRepository } from "../icons-repository";

export class InMemoryIconsRepository implements IIconsRepository {
    public items: Icon[] = [];

    async findById(id: string) {
        const icon = this.items.find((icon) => icon.id === id);

        if (!icon) {
            return null;
        }

        return icon;
    }

    async create(data: Prisma.IconCreateInput) {
        const icon = {
            ...data,
            id: randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
        } as Icon;

        this.items.push(icon);

        return icon;
    }

    async delete(id: string) {
        const iconIndex = this.items.findIndex((icon) => icon.id === id);
        const icon = this.items[iconIndex];
        this.items.splice(iconIndex, 1);

        return icon;
    }

    async list() {
        return this.items;
    }
}