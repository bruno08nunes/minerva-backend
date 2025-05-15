import { Request, Response } from "express";
import { PrismaProfilePictureRepository } from "../repositories/prisma/prisma-profile-picture-repository";
import { ProfilePicturesService } from "../services/profile-picture-services";
import NotFoundError from "../utils/errors/not-found";
import { z } from "zod";

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

export async function createProfilePictureController(req: Request, res: Response) {
    const registerBodySchema = z.object({
        url: z.string().url(),
    });

    const { url } = registerBodySchema.parse(req.body);

    const profilePicture = await profilePictureService.createProfilePicture({ url });

    res.status(201).json({
        data: profilePicture,
        success: true,
        message: "Profile picture created successfully.",
    });

    // TODO: Implement file upload logic, its error handling and update the swagger with this
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