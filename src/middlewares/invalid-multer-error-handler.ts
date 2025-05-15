import { NextFunction, Request, Response } from "express";
import { uploadProfileImage } from "../lib/multer";
import multer from "multer";

export function uploadProfileImageMiddleware(fieldName: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        uploadProfileImage.single(fieldName)(req, res, function (err) {
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
