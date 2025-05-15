import { Router } from "express";
import {
    getProfilePictureByIdController,
    createProfilePictureController,
    listProfilePicturesController,
    deleteProfilePictureController,
} from "../controllers/profile-picture-controllers";

const profilePictureRoutes = Router();

profilePictureRoutes.get(
    "/profile-pictures/:id",
    getProfilePictureByIdController
);
profilePictureRoutes.post("/profile-pictures", createProfilePictureController);
profilePictureRoutes.get("/profile-pictures", listProfilePicturesController);
profilePictureRoutes.delete(
    "/profile-pictures/:id",
    deleteProfilePictureController
);

export default profilePictureRoutes;
