import { Router } from "express";
import { createFollowController, deleteFollowController, getFollowersController, getFollowingController } from "../controllers/follow-controllers";
import { authMiddleware } from "../middlewares/verify-jwt";

const followRouter = Router();

followRouter.get("/users/followers/:id", getFollowersController);
followRouter.get("/users/following/:id", getFollowingController);
followRouter.post("/users/follow", authMiddleware, createFollowController);
followRouter.delete("/users/follow", authMiddleware, deleteFollowController);

export default followRouter;