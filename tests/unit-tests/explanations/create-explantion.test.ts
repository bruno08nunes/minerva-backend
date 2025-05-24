import { ExplanationServices } from "./../../../src/services/explanation-services";
import { InMemoryExplanationRepository } from "./../../../src/repositories/in-memory/in-memory-explanation-repository";

let explanationRepository: InMemoryExplanationRepository;
let service: ExplanationServices;

describe("Create Explanation Use Case", () => {
    beforeEach(() => {
        explanationRepository = new InMemoryExplanationRepository();
        service = new ExplanationServices(explanationRepository);
    });

    it("should be able to create an explanation", async () => {
        const { id } = await service.createExplanation({
            title: "Lorem",
            content: {
                type: "paragraph",
                data: "Lorem",
            },
            topicId: "123",
        });

        const explanation = await explanationRepository.findById(id);

        expect(explanation).not.toBeNull();
        expect(explanation?.title).toEqual("Lorem");
    });
});
