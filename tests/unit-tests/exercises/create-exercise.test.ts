import { InMemoryExercisesRepository } from "../../../src/repositories/in-memory/in-memory-exercises-repository";
import { ExerciseServices } from "../../../src/services/exercise-services";

let exerciseRepository: InMemoryExercisesRepository;
let service: ExerciseServices;

describe("Create Exercise Use Case", () => {
    beforeEach(() => {
        exerciseRepository = new InMemoryExercisesRepository();
        service = new ExerciseServices(exerciseRepository);
    });

    it("should be able to create an exercise", async () => {
        const { id } = await service.createExercise({
            content: [{type: "paragraph", data: "What is the capital of France?"}],
            order: 1,
            type: "MULTIPLE_CHOICE",
            hint: "It's also known as the city of lights.",
            lessonId: "lesson-1",
        });

        const exercise = await exerciseRepository.findById(id);

        expect(exercise).not.toBeNull();
        expect(exercise?.type).toEqual("MULTIPLE_CHOICE");
    });
});