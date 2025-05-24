import { ExplanationServices } from "./../../../src/services/explanation-services";
import { InMemoryExplanationRepository } from "./../../../src/repositories/in-memory/in-memory-explanation-repository";

let explanationRepository: InMemoryExplanationRepository;
let service: ExplanationServices;

describe("List Explanation Use Case", () => {
    beforeEach(() => {
        explanationRepository = new InMemoryExplanationRepository();
        service = new ExplanationServices(explanationRepository);
    });

    it("should be able to list explanations by topic", async () => {
        const { id: createdExplanationId, topicId } = await explanationRepository.create({
            title: "Lorem",
            content: {
                type: "paragraph",
                data: "Lorem",
            },
            topicId: "123",
        });

        const explanations = await service.listExplanationsByTopic(topicId);

        expect(explanations).toHaveLength(1);
        expect(explanations[0].id).toEqual(createdExplanationId);
        expect(explanations[0].title).toEqual("Lorem");
    });

    it("should not be able to list explanations from a non-existing topic", async () => {
        const explanations = await service.listExplanationsByTopic("non-existing-topic");

        expect(explanations).toHaveLength(0);
    });
});
