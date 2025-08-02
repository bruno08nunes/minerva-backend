import { TopicService } from '../../../src/services/topic-services';
import { InMemoryTopicsRepository } from '../../../src/repositories/in-memory/in-memory-topic-repository';

let topicRepository: InMemoryTopicsRepository;
let service: TopicService;

describe("Create Topic Use Case", () => {
    beforeEach(() => {
        topicRepository = new InMemoryTopicsRepository();
        service = new TopicService(topicRepository);
    });

    it("should be able to create a topic", async () => {
        const { id: createdId } = await service.createTopic({
            name: "Lorem",
            description: "Lorem ipsum dolor met.",
            iconId: "123",
            order: 1
        });

        const topic = await topicRepository.findById(createdId);

        expect(topic).not.toBeNull();
        expect(topic?.name).toEqual("Lorem");
    });
});