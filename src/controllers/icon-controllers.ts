import e, { Request, Response } from "express";
import { PrismaIconsRepository } from "../repositories/prisma/prisma-icons-repository";
import { IconServices } from "../services/icon-services";
import NotFoundError from "../utils/errors/not-found";
import { unlink } from "fs";
import { join } from "path";

const iconService = new IconServices(new PrismaIconsRepository());

export async function getIconByIdController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const icon = await iconService.getIconById(id);

        if (!icon) {
            throw new NotFoundError();
        }

        res.json({
            data: icon,
            success: true,
            message: "Icon found.",
        });
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(404).json({
                message: error.message || "Icon not found.",
                success: false,
            });
            return;
        }

        res.status(500).json({
            message: "Internal server error.",
            success: false,
        });
    }
}

export async function createIconController(req: Request, res: Response) {
    const { file } = req;
    const { description } = req.body;

    if (!file) {
        res.status(400).json({
            success: false,
            message: "File not send.",
        });
        return;
    }

    const icon = await iconService.createIcon({
        url: file.filename,
        description,
    });

    res.status(201).json({
        data: icon,
        success: true,
        message: "Icon uploaded successfully.",
    });
}

export async function editIconController(req: Request, res: Response) {
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

    const icon = await iconService.editIcon(id, {
        url: file.filename,
        description,
    });

    res.status(201).json({
        data: icon,
        success: true,
        message: "Icon updated successfully.",
    });
}

export async function deleteIconController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const icon = await iconService.deleteIcon(id);
        const filePath = join(__dirname, "..", "public", "icons", icon.url);

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
            data: icon,
            success: true,
            message: "Icon deleted successfully.",
        });
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(404).json({
                message: error.message || "Icon not found.",
                success: false,
            });
            return;
        }

        throw error;
    }
}

export async function listIconsController(req: Request, res: Response) {
    const icons = await iconService.listIcons();

    res.json({
        data: icons,
        success: true,
        message: "Icons listed successfully.",
    });
}
