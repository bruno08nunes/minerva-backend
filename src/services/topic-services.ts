import { ITopicRepository } from './../repositories/topics-repository';
import BadRequestError from "../utils/errors/bad-request-error";
import NotFoundError from "../utils/errors/not-found";

export class TopicService {
    constructor(private topicRepository: ITopicRepository) {}

    async createTopic(data: { name: string, iconId: string, description: string }) {
        return this.topicRepository.create(data);
    }

    async updateTopic(
        id: string,
        data: { name?: string; iconId?: string; description?: string }
    ) {
        if (!data.name && !data.description && !data.iconId) {
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
