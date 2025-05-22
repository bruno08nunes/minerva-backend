import { CreateChoiceType, IChoicesRepository } from "../repositories/choice-repository";
import NotFoundError from "../utils/errors/not-found";

export class ChoiceServices {
    constructor(private choiceRepository: IChoicesRepository) {}

    async getChoiceById(id: string) {
        const choice = await this.choiceRepository.findById(id);

        if (!choice) {
            throw new NotFoundError();
        }

        return choice;
    }

    async listChoicesByExercise(exerciseId: string) {
        return await this.choiceRepository.listByExercise(exerciseId);
    }

    async createChoice(data: CreateChoiceType) {
        return await this.choiceRepository.create(data);
    }

    async updateChoice(id: string, data: { text?: string; isCorrect?: boolean, order?: number }) {
        const choice = await this.choiceRepository.findById(id);

        if (!choice) {
            throw new NotFoundError();
        }

        const updatedChoice = await this.choiceRepository.update(id, data);

        return updatedChoice;
    }

    async deleteChoice(id: string) {
        const choice = await this.choiceRepository.findById(id);

        if (!choice) {
            throw new NotFoundError();
        }

        const deletedChoice = await this.choiceRepository.delete(id);

        return deletedChoice;
    }
}
