import { TopicService } from '../../../src/services/topic-services';
import { InMemoryTopicsRepository } from '../../../src/repositories/in-memory/in-memory-topic-repository';

let topicRepository: InMemoryTopicsRepository;
let service: TopicService;

describe("List Topic Use Case", () => {
    beforeEach(() => {
        topicRepository = new InMemoryTopicsRepository();
        service = new TopicService(topicRepository);
    });

    it("should be able to list topics", async () => {
        const { id: createdId } = await topicRepository.create({
            name: "Lorem",
            description: "Lorem ipsum dolor met.",
            iconId: "123",
        });

        const topics = await service.listTopics();

        expect(topics).toHaveLength(1);
        expect(topics[0].id).toEqual(createdId);
        expect(topics[0].name).toEqual("Lorem");
    });
});
