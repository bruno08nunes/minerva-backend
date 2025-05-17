import { NextFunction, Request, Response } from "express";
import { uploadProfileImage, uploadIcon } from "../lib/multer";
import multer from "multer";

const uploadObject = {
    profileImage: uploadProfileImage,
    icon: uploadIcon,
}

export function uploadImageMiddleware(fieldName: string, type: keyof typeof uploadObject) {
    return (req: Request, res: Response, next: NextFunction) => {
        uploadObject[type].single(fieldName)(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({
                    success: false,
                    message: `Upload error: ${err.message}`,
                });
            } else if (err) {
                return res.status(400).json({
                    success: false,
                    message: err.message || "Upload error.",
                });
            }
            next();
        });
    };
}
