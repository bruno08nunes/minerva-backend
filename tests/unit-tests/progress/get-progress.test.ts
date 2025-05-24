import { ProgressServices } from "../../../src/services/progress-services";
import { InMemoryProgressRepository } from "../../../src/repositories/in-memory/in-memory-progress-repository";

let progressRepository: InMemoryProgressRepository;
let service: ProgressServices;

describe("Get Progress Use Case", () => {
    beforeEach(() => {
        progressRepository = new InMemoryProgressRepository();
        service = new ProgressServices(progressRepository);
    });

    it("should be able to get progress by user and lesson", async () => {
        progressRepository.create({
            userId: "123",
            lessonId: "123",
            isCompleted: false,
        });

        const progress = await service.find("123", "123");

        expect(progress).not.toBeNull();
        expect(progress.isCompleted).toEqual(false);
    });
});
