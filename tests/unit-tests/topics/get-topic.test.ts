import { TopicService } from "../../../src/services/topic-services";
import { InMemoryTopicsRepository } from "../../../src/repositories/in-memory/in-memory-topic-repository";

let topicRepository: InMemoryTopicsRepository;
let topicService: TopicService;

describe("Get Topic Use Case", () => {
    beforeEach(() => {
        topicRepository = new InMemoryTopicsRepository();
        topicService = new TopicService(topicRepository);
    });

    it("should be able to get a topic", async () => {
        await topicRepository.create({
            name: "Existing Topic",
            description: "This is an existing topic.",
            slug: "existing-topic-slug",
            iconId: "icon-123",
            order: 1
        });

        const topic = await topicService.getTopicBySlug("existing-topic-slug");
        expect(topic).toBeDefined();
        expect(topic.slug).toBe("existing-topic-slug");
    });

    it("should not be able to get a topic for a non-existing topic", async () => {
        await expect(
            topicService.getTopicBySlug("non-existing-topic-slug")
        ).rejects.toThrow("Resource not found.");
    });
});
