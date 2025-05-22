import { InMemoryExercisesRepository } from "../../../src/repositories/in-memory/in-memory-exercises-repository";
import { ExerciseServices } from "../../../src/services/exercise-services";

let exerciseRepository: InMemoryExercisesRepository;
let service: ExerciseServices;

describe("Update Exercise Use Case", () => {
    beforeEach(() => {
        exerciseRepository = new InMemoryExercisesRepository();
        service = new ExerciseServices(exerciseRepository);
    });

    it("should be able to update an exercise", async () => {
        const exercise = await exerciseRepository.create({
            statement: "Statement",
            order: 1,
            type: "MULTIPLE_CHOICE",
            hint: "Hint",
            lessonId: "lesson-01",
        });

        const updatedExercise = await service.updateExercise(exercise.id, {
            statement: "Updated Statement",
            hint: "Updated Hint",
        });

        expect(updatedExercise).toEqual({
            ...exercise,
            statement: "Updated Statement",
            hint: "Updated Hint",
        });
    });
});