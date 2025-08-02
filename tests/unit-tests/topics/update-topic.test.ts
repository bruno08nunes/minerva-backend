import { TopicService } from "../../../src/services/topic-services";
import { InMemoryTopicsRepository } from "../../../src/repositories/in-memory/in-memory-topic-repository";

let topicRepository: InMemoryTopicsRepository;
let service: TopicService;

describe("Update Topic Use Case", () => {
    beforeEach(() => {
        topicRepository = new InMemoryTopicsRepository();
        service = new TopicService(topicRepository);
    });

    it("should be able to update a topic", async () => {
        const createdTopic = await topicRepository.create({
            name: "Lorem",
            description: "Lorem ipsum dolor it.",
            iconId: "123",
            slug: "lorem",
            order: 1,
        });
        const updatedTopic = await service.updateTopic(createdTopic.id, {
            name: "Topic Updated",
        });
        expect(updatedTopic.name).toEqual("Topic Updated");
    });

    it("should not be able to update topic with wrong id", async () => {
        await topicRepository.create({
            name: "Lorem",
            description: "Lorem ipsum dolor it.",
            iconId: "123",
            slug: "lorem",
            order: 1,
        });

        expect(async () => {
            await service.updateTopic("wrong-id", {
                name: "Topic Updated",
            });
        }).rejects.toThrow("Resource not found.");
    });

    it("should not be able to update topic with invalid data", async () => {
        const createdTopic = await topicRepository.create({
            name: "Lorem",
            description: "Lorem ipsum dolor it.",
            iconId: "123",
            slug: "lorem",
            order: 1,
        });

        expect(async () => {
            await service.updateTopic(createdTopic.id, {});
        }).rejects.toThrow("Bad request.");
    });
});
