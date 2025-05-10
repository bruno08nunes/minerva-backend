import { Router } from "express";
import { getUserByIdController, loginController, registerUserController } from "../controllers/user-controllers";

const userRoutes = Router();

userRoutes.get("/users/:id", getUserByIdController);
userRoutes.post("/users/login", loginController);
userRoutes.post("/users/register", registerUserController)

export default userRoutes;
