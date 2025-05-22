import { Router } from "express";
import { createChoiceController, deleteChoiceController, getChoiceByIdController, listChoicesByExerciseController, updateChoiceController } from "../controllers/choice-controllers";
import { verifyUserRoleMiddleware } from "../middlewares/verify-user-role";

const choiceRouter = Router();

choiceRouter.get("/choices/:id", getChoiceByIdController);
choiceRouter.get("/choices/list/exerciseId", listChoicesByExerciseController);
choiceRouter.post("/choices", verifyUserRoleMiddleware, createChoiceController);
choiceRouter.put("/choices/:id", verifyUserRoleMiddleware, updateChoiceController);
choiceRouter.delete("/choices/:id", verifyUserRoleMiddleware, deleteChoiceController);

export default choiceRouter;