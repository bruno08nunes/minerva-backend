import { Router } from "express";
import {
    getIconByIdController,
    createIconController,
    listIconsController,
    deleteIconController,
} from "../controllers/icon-controllers";

const iconRoutes = Router();

iconRoutes.get("/icons/:id", getIconByIdController);
iconRoutes.post("/icons", createIconController);
iconRoutes.get("/icons", listIconsController);
iconRoutes.delete("/icons/:id", deleteIconController);

export default iconRoutes;