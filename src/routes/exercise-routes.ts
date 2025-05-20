import { Router } from "express";
import {
    createExerciseController,
    deleteExerciseController,
    getExerciseByIdController,
    listExercisesByLessonController,
    updateExerciseController,
} from "../controllers/exercise-controllers";
import { verifyUserRoleMiddleware } from "../middlewares/verify-user-role";

const exerciseRouter = Router();

exerciseRouter.get(
    "/exercises/list/:lessonId",
    listExercisesByLessonController
);
exerciseRouter.get("/exercises/:id", getExerciseByIdController);
exerciseRouter.post("/exercises", verifyUserRoleMiddleware, createExerciseController);
exerciseRouter.put("/exercises/:id", verifyUserRoleMiddleware, updateExerciseController);
exerciseRouter.delete("/exercises/:id", verifyUserRoleMiddleware, deleteExerciseController);

export default exerciseRouter;