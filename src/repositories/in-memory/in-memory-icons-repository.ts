import { randomUUID } from 'node:crypto';
import { Icon } from "../../generated/prisma";
import { IIconsRepository } from "../icons-repository";

export class InMemoryIconsRepository implements IIconsRepository {
    public items: Icon[] = [];

    async create(data: Icon) {
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