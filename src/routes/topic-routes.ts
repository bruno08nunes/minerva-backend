import { Router } from "express";
import { createTopicController, deleteTopicController, getTopicBySlugController, listTopicController, updateTopicController } from "../controllers/topic-controllers";
import { verifyUserRoleMiddleware } from "../middlewares/verify-user-role";

const topicRouter = Router();

topicRouter.get("/topics/:slug", getTopicBySlugController);
topicRouter.get("/topics", listTopicController);
topicRouter.post("/topics", verifyUserRoleMiddleware, createTopicController);
topicRouter.put("/topics/:id", verifyUserRoleMiddleware, updateTopicController);
topicRouter.delete("/topics/:id", verifyUserRoleMiddleware, deleteTopicController);

export default topicRouter;