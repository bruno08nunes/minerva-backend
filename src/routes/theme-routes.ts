import { Router } from "express";
import { createThemeController, deleteThemeController, getThemeBySlugController, listThemeController, updateThemeController } from "../controllers/theme-controllers";
import { verifyUserRoleMiddleware } from "../middlewares/verify-user-role";

const themeRouter = Router();

themeRouter.get("/themes/:slug", getThemeBySlugController);
themeRouter.get("/themes", listThemeController);
themeRouter.post("/themes", verifyUserRoleMiddleware, createThemeController);
themeRouter.put("/themes/:id", verifyUserRoleMiddleware, updateThemeController);
themeRouter.delete("/themes/:id", verifyUserRoleMiddleware, deleteThemeController);

export default themeRouter;