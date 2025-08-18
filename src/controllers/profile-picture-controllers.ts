import { Request, Response } from "express";
import { PrismaProfilePictureRepository } from "../repositories/prisma/prisma-profile-picture-repository";
import { ProfilePicturesService } from "../services/profile-picture-services";
import NotFoundError from "../utils/errors/not-found";
import { unlink } from "fs";
import { join } from "path";

const profilePictureService = new ProfilePicturesService(
    new PrismaProfilePictureRepository()
);

export async function getProfilePictureByIdController(
    req: Request,
    res: Response
) {
    const { id } = req.params;

    try {
        const profilePicture =
            await profilePictureService.getProfilePictureById(id);

        if (!profilePicture) {
            throw new NotFoundError();
        }

        res.json({
            data: profilePicture,
            success: true,
            message: "Profile picture found.",
        });
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(404).json({
                message: error.message || "Profile picture not found.",
                success: false,
            });
            return;
        }

        throw error;
    }
}

export async function uploadProfilePictureController(
    req: Request,
    res: Response
) {
    const { file } = req;
    const { description } = req.body;

    if (!file) {
        res.status(400).json({
            success: false,
            message: "File not send.",
        });
        return;
    }

    const profilePicture = await profilePictureService.createProfilePicture({
        url: file.filename,
        description,
    });

    res.status(201).json({
        data: profilePicture,
        success: true,
        message: "Profile picture uploaded successfully.",
    });
}

export async function listProfilePicturesController(
    req: Request,
    res: Response
) {
    const profilePictures = await profilePictureService.listProfilePictures();

    res.json({
        data: profilePictures,
        success: true,
        message: "Profile pictures listed successfully.",
    });
}

export async function editProfilePictureController(
    req: Request,
    res: Response
) {
    const { file } = req;
    const { description } = req.body;
    const { id } = req.params;

    if (!file) {
        res.status(400).json({
            success: false,
            message: "File not send.",
        });
        return;
    }

    try {
        const icon = await profilePictureService.editProfilePicture(id, {
            url: file.filename,
            description,
        });

        res.status(201).json({
            data: icon,
            success: true,
            message: "Profile picture updated successfully.",
        });
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(404).json({
                message: error.message || "Profile picture not found.",
                success: false,
            });
            return;
        }

        throw error;
    }
}

export async function deleteProfilePictureController(
    req: Request,
    res: Response
) {
    const { id } = req.params;

    try {
        const profilePicture = await profilePictureService.deleteProfilePicture(
            id
        );
        const filePath = join(
            __dirname,
            "..",
            "public",
            "profile-images",
            profilePicture.url
        );

        unlink(filePath, (err) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: "Error deleting file.",
                });
                return;
            }
        });

        res.json({
            data: profilePicture,
            success: true,
            message: "Profile picture deleted successfully.",
        });
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(404).json({
                message: error.message || "Profile picture not found.",
                success: false,
            });
            return;
        }

        throw error;
    }
}
