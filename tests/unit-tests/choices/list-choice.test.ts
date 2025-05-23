import { ChoiceServices } from "./../../../src/services/choice-services";
import { InMemoryChoicesRepository } from "./../../../src/repositories/in-memory/in-memory-choices-repository";

let choiceRepository: InMemoryChoicesRepository;
let service: ChoiceServices;

describe("List Choice Use Case", () => {
    beforeEach(() => {
        choiceRepository = new InMemoryChoicesRepository();
        service = new ChoiceServices(choiceRepository);
    });

    it("should be able to list choices", async () => {
        const { id: createdChoiceId } = await choiceRepository.create({
            text: "Paris",
            order: 1,
            isCorrect: true,
            exerciseId: "exercise-123",
        });

        const choices = await service.listChoicesByExercise("exercise-123");

        expect(choices).toHaveLength(1);
        expect(choices[0].id).toEqual(createdChoiceId);
        expect(choices[0].text).toEqual("Paris");
    });

    it("should not be able to list choices from a non-existing exercise", async () => {
        const exercises = await service.listChoicesByExercise("non-existing-exercise");

        expect(exercises).toHaveLength(0);
    });
});
