import { InMemoryLessonsRepository } from "../../../src/repositories/in-memory/in-memory-lessons-repository";
import { LessonServices } from "../../../src/services/lesson-services";

let lessonRepository: InMemoryLessonsRepository;
let service: LessonServices;

describe("Delete Lesson Use Case", () => {
    beforeEach(() => {
        lessonRepository = new InMemoryLessonsRepository();
        service = new LessonServices(lessonRepository);
    });

    it("should be able to delete a lesson", async () => {
        const { id: createdLessonId } = await lessonRepository.create({
            name: "lesson",
            description: "lesson",
            rewardXP: 5,
            order: 0,
            iconId: "123",
            themeId: "123",
            topicId: "123"
        });

        const deletedLesson = await service.deleteLesson(createdLessonId);

        const lesson = await lessonRepository.findById(createdLessonId);
        
        expect(deletedLesson.id).toEqual(createdLessonId);
        expect(lesson).toBeNull();
    });

    it("should not be able to delete a lesson with wrong id", async () => {
        await expect(service.deleteLesson("non-existing-id")).rejects.toThrow(
            "Resource not found."
        );
    });
})