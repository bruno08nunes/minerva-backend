import { ITopicRepository } from './../topics-repository';
import { randomUUID } from 'node:crypto';
import { Topic } from "../../generated/prisma";

export class InMemoryTopicsRepository implements ITopicRepository {
    private topics: Topic[] = [];

    async findById(id: string){
        return this.topics.find((topic) => topic.id === id) || null;
    }

    async create(topic: { name: string, iconId: string, description: string }) {
        const { name, description, iconId } = topic;

        const newTopic: Topic = {
            id: randomUUID(),
            name,
            description,
            iconId,
        };

        this.topics.push(newTopic);
        return newTopic;
    }

    async update(
        id: string,
        data: { name?: string; iconId?: string; description?: string }
    ) {
        const topicIndex = this.topics.findIndex((topic) => topic.id === id);
        const topic = this.topics[topicIndex];

        this.topics[topicIndex] = {
            ...topic,
            ...data,
        } as Topic;

        return this.topics[topicIndex];
    }

    async delete(id: string) {
        const index = this.topics.findIndex((topic) => topic.id === id);
        const [deletedTopic] = this.topics.splice(index, 1);
        return deletedTopic;
    }

    async list() {
        return this.topics;
    }
}
