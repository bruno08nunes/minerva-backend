import { InMemoryExercisesRepository } from "../../../src/repositories/in-memory/in-memory-exercises-repository";
import { ExerciseServices } from "../../../src/services/exercise-services";

let exerciseRepository: InMemoryExercisesRepository;
let service: ExerciseServices;

describe("Get Exercise Use Case", () => {
    beforeEach(() => {
        exerciseRepository = new InMemoryExercisesRepository();
        service = new ExerciseServices(exerciseRepository);
    });

    it("should be able to get exercise by id", async () => {
        const { id: createdExerciseId } = await exerciseRepository.create({
            statement: "What is the capital of France?",
            order: 1,
            type: "MULTIPLE_CHOICE",
            hint: "It's also known as the city of lights.",
            lessonId: "lesson-123",
        });

        const exercise = await service.getExerciseById(createdExerciseId);

        expect(exercise.id).toEqual(createdExerciseId);
        expect(exercise.statement).toEqual("What is the capital of France?");
    });

    it("should not be able to get exercise with wrong id", async () => {
        await expect(service.getExerciseById("non-existing-id")).rejects.toThrow(
            "Resource not found."
        );
    });
});