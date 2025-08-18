import { Router } from "express";
import {
    getIconByIdController,
    createIconController,
    listIconsController,
    deleteIconController,
    editIconController,
} from "../controllers/icon-controllers";
import { uploadImageMiddleware } from "../middlewares/upload-middleware";
import { verifyUserRoleMiddleware } from "../middlewares/verify-user-role";

const iconRoutes = Router();

iconRoutes.get("/icons/:id", getIconByIdController);
iconRoutes.post(
    "/icons",
    verifyUserRoleMiddleware,
    uploadImageMiddleware("file", "icon"),
    createIconController
);
iconRoutes.put(
    "/icons/:id",
    verifyUserRoleMiddleware,
    uploadImageMiddleware("file", "icon"),
    editIconController
);
iconRoutes.get("/icons", listIconsController);
iconRoutes.delete("/icons/:id", verifyUserRoleMiddleware, deleteIconController);

export default iconRoutes;
