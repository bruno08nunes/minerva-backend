import { ExplanationServices } from "./../../../src/services/explanation-services";
import { InMemoryExplanationRepository } from "./../../../src/repositories/in-memory/in-memory-explanation-repository";

let explanationRepository: InMemoryExplanationRepository;
let service: ExplanationServices;

describe("Delete Explanation Use Case", () => {
    beforeEach(() => {
        explanationRepository = new InMemoryExplanationRepository();
        service = new ExplanationServices(explanationRepository);
    });

    it("should be able to delete an explanation", async () => {
        const { id: createExplanationId } = await explanationRepository.create({
            title: "Lorem",
            content: {
                type: "paragraph",
                data: "Lorem",
            },
            topicId: "123",
        });

        const deletedExplanation = await service.deleteExplanation(createExplanationId);

        const explanation = await explanationRepository.findById(createExplanationId);

        expect(deletedExplanation.id).toEqual(createExplanationId);
        expect(explanation).toBeNull();
    });
});
