import { InMemoryExercisesRepository } from "../../../src/repositories/in-memory/in-memory-exercises-repository";
import { ExerciseServices } from "../../../src/services/exercise-services";

let exerciseRepository: InMemoryExercisesRepository;
let service: ExerciseServices;

describe("Delete Exercise Use Case", () => {
    beforeEach(() => {
        exerciseRepository = new InMemoryExercisesRepository();
        service = new ExerciseServices(exerciseRepository);
    });

    it("should be able to delete an exercise", async () => {
        const { id: createdExerciseId } = await exerciseRepository.create({
            statement: "What is the capital of France?",
            order: 1,
            type: "MULTIPLE_CHOICE",
            hint: "It's also known as the city of lights.",
            lessonId: "lesson-123",
        });

        const deletedExercise = await service.deleteExercise(createdExerciseId);

        const exercise = await exerciseRepository.findById(createdExerciseId);

        expect(deletedExercise.id).toEqual(createdExerciseId);
        expect(exercise).toBeNull();
    });
});