import { Router } from "express";
import {
    getUserByIdController,
    loginController,
    registerUserController,
    updateUserProfileController,
    deleteUserController,
    getUserByUsernameController,
    listRankingController,
    incrementUserXpController,
} from "../controllers/user-controllers";
import { getUserIdMiddleware } from "../middlewares/get-user-id-middleware";

const userRoutes = Router();

// TODO: Check if the getUserByIdController is useless
userRoutes.get("/users/:username", getUserByUsernameController);
userRoutes.post("/login", loginController);
userRoutes.post("/register", registerUserController);
userRoutes.put("/users/xp/:id", incrementUserXpController);
userRoutes.put("/users/:id", updateUserProfileController);
userRoutes.delete("/users/:id", deleteUserController);
userRoutes.get("/ranking", getUserIdMiddleware, listRankingController);

export default userRoutes;
