import { Router } from "express";
import { getUserByIdController } from "../controllers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/users/:id", getUserByIdController);

export default userRoutes;
