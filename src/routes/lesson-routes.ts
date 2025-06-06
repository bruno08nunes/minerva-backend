import { Router } from "express";
import {
    getLessonByIdController,
    listLessonsController,
    listLessonsByTopicAndThemeController,
    createLessonController,
    updateLessonController,
    deleteLessonController,
} from "../controllers/lesson-controllers";
import { verifyUserRoleMiddleware } from "../middlewares/verify-user-role";
import { getUserIdMiddleware } from "../middlewares/get-user-id-middleware";

const lessonRouter = Router();

lessonRouter.get("/lessons/list", getUserIdMiddleware, listLessonsByTopicAndThemeController);
lessonRouter.get("/lessons/:id", getLessonByIdController);
lessonRouter.get("/lessons", listLessonsController);
lessonRouter.post("/lessons", verifyUserRoleMiddleware, createLessonController);
lessonRouter.put(
    "/lessons/:id",
    verifyUserRoleMiddleware,
    updateLessonController
);
lessonRouter.delete(
    "/lessons/:id",
    verifyUserRoleMiddleware,
    deleteLessonController
);

export default lessonRouter;
