import { Router } from "express";
import { getAchievementById, listAchievements, createAchievement, updateAchievement, deleteAchievement } from "../controllers/achievement-controllers";
import { verifyUserRoleMiddleware } from "../middlewares/verify-user-role";
import { getUserIdMiddleware } from "../middlewares/get-user-id-middleware";

const achievementRouter = Router();

achievementRouter.get("/achievements/:id", getAchievementById);
achievementRouter.get("/achievements", getUserIdMiddleware, listAchievements);
achievementRouter.post("/achievements", verifyUserRoleMiddleware, createAchievement);
achievementRouter.put("/achievements/:id", verifyUserRoleMiddleware, updateAchievement);
achievementRouter.delete("/achievements/:id", verifyUserRoleMiddleware, deleteAchievement);

export default achievementRouter;