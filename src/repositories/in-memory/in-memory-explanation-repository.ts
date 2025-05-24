import { randomUUID } from 'node:crypto';
import { Explanation, Prisma } from "../../generated/prisma";
import { CreateExplanationType, IExplanationRepository } from "../explanation-repository";

export class InMemoryExplanationRepository implements IExplanationRepository {
    public items: Explanation[] = [];

    async findById(id: string) {
        return this.items.find((explanation) => explanation.id === id) || null;
    }

    async list() {
        return this.items;
    }

    async listByTopic(topicId: string) {
        return this.items.filter((item) => item.topicId === topicId)
    }

    async create(data: CreateExplanationType) {
        const explanation = {
            ...data,
            content: data.content as Prisma.JsonValue,
            id: randomUUID() as string,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        this.items.push(explanation);

        return explanation;
    }

    async update(id: string, data: Partial<CreateExplanationType>) {
        const explanationIndex = this.items.findIndex(item => item.id === id);

        const explanation = this.items[explanationIndex];

        const updatedExplanation = {
            ...explanation,
            ...data,
            content: data.content as Prisma.JsonValue || explanation.content as Prisma.JsonValue
        };

        this.items[explanationIndex] = updatedExplanation;

        return updatedExplanation;
    }

    async delete(id: string): Promise<Explanation> {
        const explanationIndex = this.items.findIndex(item => item.id === id);
        
        const [explanation] = this.items.splice(explanationIndex, 1);
    
        return explanation;
    }
}