import { Router } from "express";
import { createThemeController, deleteThemeController, listThemeController, updateThemeController } from "../controllers/theme-controllers";
import { verifyUserRoleMiddleware } from "../middlewares/verify-user-role";

const themeRouter = Router();

themeRouter.get("/themes", listThemeController);
themeRouter.post("/themes", verifyUserRoleMiddleware, createThemeController);
themeRouter.put("/themes", verifyUserRoleMiddleware, updateThemeController);
themeRouter.delete("/themes", verifyUserRoleMiddleware, deleteThemeController);

export default themeRouter;