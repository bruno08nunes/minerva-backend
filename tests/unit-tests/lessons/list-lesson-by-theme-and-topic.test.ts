import { InMemoryLessonsRepository } from "../../../src/repositories/in-memory/in-memory-lessons-repository";
import { LessonServices } from "../../../src/services/lesson-services";

let lessonRepository: InMemoryLessonsRepository;
let service: LessonServices;

describe("List Lesson By Theme And Topic Use Case", () => {
    beforeEach(() => {
        lessonRepository = new InMemoryLessonsRepository();
        service = new LessonServices(lessonRepository);
    });

    it("should be able to list lessons", async () => {
        const { themeId, topicId, id: createdLessonId } = await lessonRepository.create({
            name: "lesson",
            description: "lesson",
            rewardXP: 5,
            order: 0,
            iconId: "123",
            themeId: "123",
            topicId: "123",
        });

        await lessonRepository.create({
            name: "lesson",
            description: "lesson",
            rewardXP: 5,
            order: 0,
            iconId: "1234",
            themeId: "1234",
            topicId: "1234",
        });

        const lessons = await service.listLessonsByTopicAndTheme(topicId, themeId);

        expect(lessons).toHaveLength(1);
        expect(lessons[0].id).toEqual(createdLessonId);
        expect(lessons[0].name).toEqual("lesson");
    });
})