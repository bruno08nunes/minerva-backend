import { ProgressServices } from "../../../src/services/progress-services";
import { InMemoryProgressRepository } from "../../../src/repositories/in-memory/in-memory-progress-repository";

let progressRepository: InMemoryProgressRepository;
let service: ProgressServices;

describe("Create/Update Progress Use Case", () => {
    beforeEach(() => {
        progressRepository = new InMemoryProgressRepository();
        service = new ProgressServices(progressRepository);
    });

    it("should be able to create a profile picture", async () => {
        await service.progress({
            userId: "123",
            lessonId: "123",
            isCompleted: true,
        });

        const progress = await progressRepository.find("123", "123");

        expect(progress).not.toBeNull();
        expect(progress?.isCompleted).toEqual(true);
    });

    it("should be able to update a profile picture", async () => {
        await service.progress({
            userId: "123",
            lessonId: "123",
            isCompleted: false,
        });

        await service.progress({
            userId: "123",
            lessonId: "123",
            isCompleted: true,
        });
        
        const progress = await progressRepository.find("123", "123");
        
        expect(progress).not.toBeNull();
        expect(progress?.isCompleted).toEqual(true);
    });
});
