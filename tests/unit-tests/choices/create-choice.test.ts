import { ChoiceServices } from './../../../src/services/choice-services';
import { InMemoryChoicesRepository } from './../../../src/repositories/in-memory/in-memory-choices-repository';

let choiceRepository: InMemoryChoicesRepository;
let service: ChoiceServices;

describe("Create Choice Use Case", () => {
    beforeEach(() => {
        choiceRepository = new InMemoryChoicesRepository();
        service = new ChoiceServices(choiceRepository);
    });

    it("should be able to create a choice", async () => {
        const { id } = await service.createChoice({
            text: "Paris",
            order: 1,
            isCorrect: true,
            exerciseId: "exercise-123"
        });

        const choice = await choiceRepository.findById(id);

        expect(choice).not.toBeNull();
        expect(choice?.text).toEqual("Paris");
    });
});