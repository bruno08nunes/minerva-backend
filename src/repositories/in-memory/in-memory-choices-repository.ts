import { randomUUID } from 'node:crypto';
import { Choice } from "../../generated/prisma";
import { CreateChoiceType, IChoicesRepository } from "../choice-repository";

export class InMemoryChoicesRepository implements IChoicesRepository {
    public items: Choice[] = [];

    async findById(id: string) {
        return this.items.find((item) => item.id === id) || null;
    }

    async listByExercise(exerciseId: string) {
        return this.items.filter((item) => item.exerciseId === exerciseId);
    }

    async create(data: CreateChoiceType) {
        const newItem = {
            ...data,
            id: randomUUID()
        };

        this.items.push(newItem);

        return newItem;
    }

    async update(id: string, data: { text?: string; order?: number; isCorrect?: boolean; }) {
        const itemIndex = this.items.findIndex((item) => item.id === id);
        const item = this.items[itemIndex];

        const updatedItem = {
            ...item,
            ...data,
        };

        this.items[itemIndex] = updatedItem;

        return updatedItem;
    }

    async delete(id: string) {
        const itemIndex = this.items.findIndex(item => item.id === id);
        const [item] = this.items.splice(itemIndex, 1);
        return item;
    }
    
}