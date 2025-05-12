import { Router } from "express";
import { getUserByIdController, loginController, registerUserController } from "../controllers/user-controllers";

const userRoutes = Router();

userRoutes.get("/users/:id", getUserByIdController);
userRoutes.post("/login", loginController);
userRoutes.post("/register", registerUserController)

export default userRoutes;
