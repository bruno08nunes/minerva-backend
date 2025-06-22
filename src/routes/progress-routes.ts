import { Router } from "express";
import { getProgressController, progressController } from "../controllers/progress-controllers";
import { getUserIdMiddleware } from "../middlewares/get-user-id-middleware";

const progressRouter = Router();

progressRouter.get("/progress", getProgressController);
progressRouter.post("/progress", getUserIdMiddleware, progressController);

export default progressRouter;