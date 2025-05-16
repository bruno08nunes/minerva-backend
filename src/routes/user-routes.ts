import { Router } from "express";
import {
    getUserByIdController,
    loginController,
    registerUserController,
    updateUserProfileController,
    deleteUserController,
    getUserByUsernameController,
} from "../controllers/user-controllers";

const userRoutes = Router();

// TODO: Check if the getUserByIdController is useless
userRoutes.get("/users/:username", getUserByUsernameController);
userRoutes.post("/login", loginController);
userRoutes.post("/register", registerUserController);
userRoutes.put("/users/:id", updateUserProfileController);
userRoutes.delete("/users/:id", deleteUserController);

export default userRoutes;
