import { ChoiceServices } from "./../../../src/services/choice-services";
import { InMemoryChoicesRepository } from "./../../../src/repositories/in-memory/in-memory-choices-repository";

let choiceRepository: InMemoryChoicesRepository;
let service: ChoiceServices;

describe("Delete Choice Use Case", () => {
    beforeEach(() => {
        choiceRepository = new InMemoryChoicesRepository();
        service = new ChoiceServices(choiceRepository);
    });

    it("should be able to delete a choice", async () => {
        const { id: createdChoiceId } = await choiceRepository.create({
            text: "Paris",
            order: 1,
            isCorrect: true,
            exerciseId: "exercise-123",
        });

        const deletedChoice = await service.deleteChoice(createdChoiceId);

        const choice = await choiceRepository.findById(createdChoiceId);

        expect(deletedChoice.id).toEqual(createdChoiceId);
        expect(choice).toBeNull();
    });
});
