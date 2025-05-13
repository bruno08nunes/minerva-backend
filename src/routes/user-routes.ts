import { Router } from "express";
import {
    getUserByIdController,
    loginController,
    registerUserController,
    updateUserProfileController,
    deleteUserController,
} from "../controllers/user-controllers";

const userRoutes = Router();

userRoutes.get("/users/:id", getUserByIdController);
userRoutes.post("/login", loginController);
userRoutes.post("/register", registerUserController);
userRoutes.put("/users/:id", updateUserProfileController);
userRoutes.delete("/users/:id", deleteUserController);

export default userRoutes;
