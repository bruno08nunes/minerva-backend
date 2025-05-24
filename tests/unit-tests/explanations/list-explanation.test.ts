import { ExplanationServices } from "./../../../src/services/explanation-services";
import { InMemoryExplanationRepository } from "./../../../src/repositories/in-memory/in-memory-explanation-repository";

let explanationRepository: InMemoryExplanationRepository;
let service: ExplanationServices;

describe("List Explanation Use Case", () => {
    beforeEach(() => {
        explanationRepository = new InMemoryExplanationRepository();
        service = new ExplanationServices(explanationRepository);
    });

    it("should be able to list explanations", async () => {
        const { id: createdExplanationId } = await explanationRepository.create({
            title: "Lorem",
            content: {
                type: "paragraph",
                data: "Lorem",
            },
            topicId: "123",
        });

        const explanations = await service.listExplanations();

        expect(explanations).toHaveLength(1);
        expect(explanations[0].id).toEqual(createdExplanationId);
        expect(explanations[0].title).toEqual("Lorem");
    });
});
