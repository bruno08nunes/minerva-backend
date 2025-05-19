import { InMemoryLessonsRepository } from "../../../src/repositories/in-memory/in-memory-lessons-repository";
import { LessonServices } from "../../../src/services/lesson-services";

let lessonRepository: InMemoryLessonsRepository;
let service: LessonServices;

describe("Update Lesson Use Case", () => {
    beforeEach(() => {
        lessonRepository = new InMemoryLessonsRepository();
        service = new LessonServices(lessonRepository);
    });

    it("should be able to update a lesson", async () => {
        const lessonCreated = await lessonRepository.create({
            name: "lesson",
            description: "lesson",
            rewardXP: 5,
            order: 0,
            iconId: "123",
            themeId: "123",
            topicId: "123",
        });
        const updatedLesson = await service.updateLesson(lessonCreated.id, {
            name: "Lesson Updated",
        });
        expect(updatedLesson.name).toEqual("Lesson Updated");
    });

    it("should not be able to update lesson with wrong id", async () => {
        expect(async () => {
            await service.updateLesson("wrong-id", {
                name: "Lesson Updated",
            });
        }).rejects.toThrow("Resource not found.");
    });
});
