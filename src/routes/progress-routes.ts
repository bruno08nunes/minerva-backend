import { Router } from "express";
import { getProgressController, progressController } from "../controllers/progress-controllers";

const progressRouter = Router();

progressRouter.get("/progress", getProgressController);
progressRouter.post("/progress", progressController);

export default progressRouter;