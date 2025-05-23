import {
    CreateExplanationType,
    IExplanationRepository,
} from "../repositories/explanation-repository";
import NotFoundError from "../utils/errors/not-found";

export class ExplanationServices {
    constructor(private explanationRepository: IExplanationRepository) {}

    async getExplanationById(id: string) {
        const explanation = await this.explanationRepository.findById(id);

        if (!explanation) {
            throw new NotFoundError();
        }

        return explanation;
    }

    async listExplanations() {
        return this.explanationRepository.list();
    }

    async listExplanationsByTopic(topicId: string) {
        return this.explanationRepository.listByTopic(topicId);
    }

    async createExplanation(data: CreateExplanationType) {
        return this.explanationRepository.create(data);
    }

    async updateExplanation(id: string, data: CreateExplanationType) {
        const explanation = await this.explanationRepository.findById(id);

        if (!explanation) {
            throw new NotFoundError();
        }

        return this.explanationRepository.update(id, data);
    }

    async deleteExplanation(id: string) {
        const explanation = await this.explanationRepository.findById(id);

        if (!explanation) {
            throw new NotFoundError();
        }

        return this.explanationRepository.delete(id);
    }
}
