import { TopicService } from '../../../src/services/topic-services';
import { InMemoryTopicsRepository } from '../../../src/repositories/in-memory/in-memory-topic-repository';

let topicRepository: InMemoryTopicsRepository;
let service: TopicService;

describe("Delete Profile Picture Use Case", () => {
    beforeEach(() => {
        topicRepository = new InMemoryTopicsRepository();
        service = new TopicService(topicRepository);
    });

    it("should be able to delete a topic", async () => {
        const { id: createdId } = await topicRepository.create({
            name: "Lorem",
            description: "Lorem ipsum dolor met.",
            iconId: "123",
            order: 1,
            slug: "lorem"
        });

        const deletedTopic = await service.deleteTopic(createdId);

        const topic = await topicRepository.findById(createdId);

        expect(deletedTopic.id).toEqual(createdId);
        expect(topic).toBeNull();
    });

    it("should not be able to delete a topic with wrong id", async () => {
        await expect(
            service.deleteTopic("non-existing-id")
        ).rejects.toThrow("Resource not found.");
    });
});
