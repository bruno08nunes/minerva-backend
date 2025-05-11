import { Router } from "express";
import { refreshTokenController } from "../controllers/refresh-token-controller";

const refreshRoutes = Router();

refreshRoutes.post("/refresh", refreshTokenController);

export default refreshRoutes;
