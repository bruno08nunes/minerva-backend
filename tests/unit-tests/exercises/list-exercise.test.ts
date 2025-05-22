import { InMemoryExercisesRepository } from "../../../src/repositories/in-memory/in-memory-exercises-repository";
import { ExerciseServices } from "../../../src/services/exercise-services";

let exerciseRepository: InMemoryExercisesRepository;
let service: ExerciseServices;

describe("List Exercise Use Case", () => {
    beforeEach(() => {
        exerciseRepository = new InMemoryExercisesRepository();
        service = new ExerciseServices(exerciseRepository);
    });

    it("should be able to list exercises", async () => {
        const { id: createdExerciseId } = await exerciseRepository.create({
            statement: "What is the capital of France?",
            order: 1,
            type: "MULTIPLE_CHOICE",
            hint: "It's also known as the city of lights.",
            lessonId: "lesson-1",
        });

        const exercises = await service.listExercisesByLesson("lesson-1");

        expect(exercises).toHaveLength(1);
        expect(exercises[0].id).toEqual(createdExerciseId);
        expect(exercises[0].statement).toEqual("What is the capital of France?");
    });

    it("should not be able to list exercises from a non-existing lesson", async () => {
        const exercises = await service.listExercisesByLesson("non-existing-lesson");

        expect(exercises).toHaveLength(0);
    });
});