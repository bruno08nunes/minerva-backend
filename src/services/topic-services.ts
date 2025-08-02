import { ITopicRepository } from "./../repositories/topics-repository";
import BadRequestError from "../utils/errors/bad-request-error";
import NotFoundError from "../utils/errors/not-found";
import TopicAlreadyExistsError from "../utils/errors/topic-already-exists";

export class TopicService {
    constructor(private topicRepository: ITopicRepository) {}

    async getTopicBySlug(slug: string) {
        const topic = await this.topicRepository.findBySlug(slug);

        if (!topic) {
            throw new NotFoundError();
        }

        return topic;
    }

    async createTopic(data: {
        name: string;
        iconId: string;
        description: string;
        order: number;
        slug?: string;
    }) {
        const newSlug =
            data.slug || data.name.toLowerCase().replace(/\s+/g, "-");

        const existingTopic = await this.topicRepository.findBySlug(newSlug);
        if (existingTopic) {
            throw new TopicAlreadyExistsError();
        }

        return this.topicRepository.create({ ...data, slug: newSlug });
    }

    async updateTopic(
        id: string,
        data: {
            name?: string;
            iconId?: string;
            description?: string;
            slug?: string;
            order?: number;
        }
    ) {
        if (
            !data.name &&
            !data.description &&
            !data.iconId &&
            !data.slug &&
            !data.order
        ) {
            throw new BadRequestError();
        }

        const topic = await this.topicRepository.findById(id);

        if (!topic) {
            throw new NotFoundError();
        }

        const updatedTopic = await this.topicRepository.update(id, data);

        return updatedTopic;
    }

    async deleteTopic(id: string) {
        const topic = await this.topicRepository.findById(id);

        if (!topic) {
            throw new NotFoundError();
        }

        const deletedTopic = await this.topicRepository.delete(id);

        return deletedTopic;
    }

    async listTopics() {
        return this.topicRepository.list();
    }
}
