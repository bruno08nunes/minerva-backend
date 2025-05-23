import { ChoiceServices } from "./../../../src/services/choice-services";
import { InMemoryChoicesRepository } from "./../../../src/repositories/in-memory/in-memory-choices-repository";

let choiceRepository: InMemoryChoicesRepository;
let service: ChoiceServices;

describe("Get Choice Use Case", () => {
    beforeEach(() => {
        choiceRepository = new InMemoryChoicesRepository();
        service = new ChoiceServices(choiceRepository);
    });

    it("should be able to get choice by id", async () => {
        const { id: createdChoiceId } = await choiceRepository.create({
            text: "Paris",
            order: 1,
            isCorrect: true,
            exerciseId: "exercise-123",
        });

        const choice = await service.getChoiceById(createdChoiceId);

        expect(choice.id).toEqual(createdChoiceId);
        expect(choice.text).toEqual("Paris");
    });

    it("should not be able to get choice with wrong id", async () => {
        await expect(service.getChoiceById("non-existing-id")).rejects.toThrow(
            "Resource not found."
        );
    });
});
