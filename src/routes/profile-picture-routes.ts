import { Router } from "express";
import {
    getProfilePictureByIdController,
    uploadProfilePictureController,
    listProfilePicturesController,
    deleteProfilePictureController,
} from "../controllers/profile-picture-controllers";
import { uploadImageMiddleware } from "../middlewares/upload-middleware";
import { verifyUserRoleMiddleware } from "../middlewares/verify-user-role";

const profilePictureRoutes = Router();

profilePictureRoutes.get(
    "/profile-pictures/:id",
    getProfilePictureByIdController
);
profilePictureRoutes.post(
    "/profile-pictures",
    verifyUserRoleMiddleware,
    uploadImageMiddleware("file", "profileImage"),
    uploadProfilePictureController
);
profilePictureRoutes.get("/profile-pictures", listProfilePicturesController);
profilePictureRoutes.delete(
    "/profile-pictures/:id",
    verifyUserRoleMiddleware,
    deleteProfilePictureController
);

export default profilePictureRoutes;
