import { ChoiceServices } from "./../../../src/services/choice-services";
import { InMemoryChoicesRepository } from "./../../../src/repositories/in-memory/in-memory-choices-repository";

let choiceRepository: InMemoryChoicesRepository;
let service: ChoiceServices;

describe("Update Choice Use Case", () => {
    beforeEach(() => {
        choiceRepository = new InMemoryChoicesRepository();
        service = new ChoiceServices(choiceRepository);
    });

    it("should be able to update an exercise", async () => {
        const choice = await choiceRepository.create({
            text: "Paris",
            order: 1,
            isCorrect: true,
            exerciseId: "exercise-123",
        });

        const updatedChoice = await service.updateChoice(choice.id, {
            text: "Berlim",
            isCorrect: false
        });

        expect(updatedChoice).toEqual({
            ...choice,
            text: "Berlim",
            isCorrect: false
        });
    });
});
