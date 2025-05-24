import { ExplanationServices } from "./../../../src/services/explanation-services";
import { InMemoryExplanationRepository } from "./../../../src/repositories/in-memory/in-memory-explanation-repository";

let explanationRepository: InMemoryExplanationRepository;
let service: ExplanationServices;

describe("Update Explanation Use Case", () => {
    beforeEach(() => {
        explanationRepository = new InMemoryExplanationRepository();
        service = new ExplanationServices(explanationRepository);
    });

    it("should be able to update an explanation", async () => {
        const explanation = await explanationRepository.create({
            title: "Lorem",
            content: {
                type: "paragraph",
                data: "Lorem",
            },
            topicId: "123",
        });

        const updatedExplanation = await service.updateExplanation(
            explanation.id,
            { title: "New Title" }
        );

        expect(updatedExplanation).toEqual({
            ...explanation,
            title: "New Title"
        });
    });
});
