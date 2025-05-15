import { Router } from "express";
import {
    getProfilePictureByIdController,
    uploadProfilePictureController,
    listProfilePicturesController,
    deleteProfilePictureController,
} from "../controllers/profile-picture-controllers";
import { uploadProfileImageMiddleware } from "../middlewares/invalid-multer-error-handler";

const profilePictureRoutes = Router();

profilePictureRoutes.get(
    "/profile-pictures/:id",
    getProfilePictureByIdController
);
profilePictureRoutes.post("/profile-pictures", uploadProfileImageMiddleware("file"), uploadProfilePictureController);
profilePictureRoutes.get("/profile-pictures", listProfilePicturesController);
profilePictureRoutes.delete(
    "/profile-pictures/:id",
    deleteProfilePictureController
);

export default profilePictureRoutes;
