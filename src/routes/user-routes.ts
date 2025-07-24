import { Router } from "express";
import {
    loginController,
    registerUserController,
    updateUserProfileController,
    deleteUserController,
    getUserByUsernameController,
    listRankingController,
    incrementUserXpController,
    resetUserStreakController,
    updateUserStreakController,
    getMe,
} from "../controllers/user-controllers";
import { getUserIdMiddleware } from "../middlewares/get-user-id-middleware";
import { authMiddleware } from "../middlewares/verify-jwt";

const userRoutes = Router();

userRoutes.get("/me", getUserIdMiddleware, getMe);
userRoutes.get("/users/:username", getUserIdMiddleware, getUserByUsernameController);
userRoutes.post("/login", loginController);
userRoutes.post("/register", registerUserController);
userRoutes.put("/users/xp", getUserIdMiddleware, incrementUserXpController);
userRoutes.put("/users", authMiddleware, updateUserProfileController);
userRoutes.delete("/users", authMiddleware, deleteUserController);
userRoutes.get("/ranking", getUserIdMiddleware, listRankingController);
userRoutes.patch("/users/streak", getUserIdMiddleware, updateUserStreakController);
userRoutes.patch("/users/streak/reset", getUserIdMiddleware, resetUserStreakController);

export default userRoutes;
