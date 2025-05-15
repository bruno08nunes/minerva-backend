import { Request, Response } from "express";
import { PrismaProfilePictureRepository } from "../repositories/prisma/prisma-profile-picture-repository";
import { ProfilePicturesService } from "../services/profile-picture-services";
import NotFoundError from "../utils/errors/not-found";

const profilePictureService = new ProfilePicturesService(new PrismaProfilePictureRepository());

export async function getProfilePictureByIdController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const profilePicture = await profilePictureService.getProfilePictureById(id);

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

export async function uploadProfilePictureController(req: Request, res: Response) {
    const { file } = req;

    if (!file) {
        res.status(400).json({
            success: false,
            message: "File not send.",
        });
        return;
    }

    const profilePicture = await profilePictureService.createProfilePicture({ url: file.filename });

    res.status(201).json({
        data: profilePicture,
        success: true,
        message: "Profile picture uploaded successfully.",
    });
}

export async function listProfilePicturesController(req: Request, res: Response) {
    const profilePictures = await profilePictureService.listProfilePictures();

    res.json({
        data: profilePictures,
        success: true,
        message: "Profile pictures listed successfully.",
    });
}

export async function deleteProfilePictureController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const profilePicture = await profilePictureService.deleteProfilePicture(id);

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