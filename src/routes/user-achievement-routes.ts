import { Router } from "express";
import {
    createUserAchievementController,
    deleteUserAchievementController,
    listUserAchievementsController,
} from "../controllers/user-achievement-controllers";
import { verifyUserRoleMiddleware } from "../middlewares/verify-user-role";

const userAchievementRouter = Router();

userAchievementRouter.get(
    "/user/achievements/:userId",
    listUserAchievementsController
);
userAchievementRouter.post(
    "/user/achievements",
    createUserAchievementController
);
userAchievementRouter.delete(
    "/user/achievements",
    verifyUserRoleMiddleware,
    deleteUserAchievementController
);

export default userAchievementRouter;
