import { InMemoryLessonsRepository } from "../../../src/repositories/in-memory/in-memory-lessons-repository";
import { LessonServices } from "../../../src/services/lesson-services";

let lessonRepository: InMemoryLessonsRepository;
let service: LessonServices;

describe("Get Lesson Use Case", () => {
    beforeEach(() => {
        lessonRepository = new InMemoryLessonsRepository();
        service = new LessonServices(lessonRepository);
    });

    it("should be able to get lesson by id", async () => {
        const { id: createdLessonId } = await lessonRepository.create({
            name: "lesson",
            description: "lesson",
            rewardXP: 5,
            order: 0,
            iconId: "123",
            themeId: "123",
            topicId: "123",
        });

        const lesson = await service.getLessonById(createdLessonId);

        expect(lesson.id).toEqual(createdLessonId);
        expect(lesson.name).toEqual("lesson");
    });

    it("should not be able to get lesson with wrong id", async () => {
        await expect(service.getLessonById("non-existing-id")).rejects.toThrow(
            "Resource not found."
        );
    });
});
