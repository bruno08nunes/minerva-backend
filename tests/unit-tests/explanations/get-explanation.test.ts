import { ExplanationServices } from "./../../../src/services/explanation-services";
import { InMemoryExplanationRepository } from "./../../../src/repositories/in-memory/in-memory-explanation-repository";

let explanationRepository: InMemoryExplanationRepository;
let service: ExplanationServices;

describe("Get Explanation Use Case", () => {
    beforeEach(() => {
        explanationRepository = new InMemoryExplanationRepository();
        service = new ExplanationServices(explanationRepository);
    });

    it("should be able to get explanation by id", async () => {
        const { id: createExplanationId } = await explanationRepository.create({
            title: "Lorem",
            content: {
                type: "paragraph",
                data: "Lorem",
            },
            topicId: "123",
        });

        const explanation = await service.getExplanationById(createExplanationId);

        expect(explanation.id).toEqual(createExplanationId);
        expect(explanation.title).toEqual("Lorem");
    });

    it("should not be able to get explanation with wrong id", async () => {
        await expect(
            service.getExplanationById("non-existing-id")
        ).rejects.toThrow("Resource not found.");
    });
});
