import { Router } from "express";
import {
    createExplanationController,
    deleteExplanationController,
    getExplanationByIdController,
    listExplanationsByTopicController,
    listExplanationsController,
    updateExplanationController,
} from "../controllers/explanation-controllers";
import { verifyUserRoleMiddleware } from "../middlewares/verify-user-role";

const explanationRouter = Router();

explanationRouter.get("/explanations/list", listExplanationsController);
explanationRouter.get("/explanations/:id", getExplanationByIdController);
explanationRouter.get(
    "/explanations/list/:topicId",
    listExplanationsByTopicController
);
explanationRouter.post("/explanations", verifyUserRoleMiddleware, createExplanationController);
explanationRouter.put("/explanations/:id", verifyUserRoleMiddleware, updateExplanationController);
explanationRouter.delete("/explanations/:id", verifyUserRoleMiddleware, deleteExplanationController);

export default explanationRouter;
