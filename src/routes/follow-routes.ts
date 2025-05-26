import { Router } from "express";
import { createFollowController, deleteFollowController, getFollowersController, getFollowingController } from "../controllers/follow-controllers";

const followRouter = Router();

followRouter.get("/users/followers/:id", getFollowersController);
followRouter.get("/users/following/:id", getFollowingController);
followRouter.post("/users/follow", createFollowController);
followRouter.delete("/users/follow", deleteFollowController);

export default followRouter;