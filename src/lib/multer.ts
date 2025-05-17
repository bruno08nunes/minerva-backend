import multer from "multer";
import InvalidFileFormatError from "../utils/errors/invalid-file-format-error";

const storageProfileImage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/public/profile-images");
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.trim().replaceAll(" ", "_");
        cb(null, Date.now() + fileName);
    },
});

const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
function imageFileFilter(
    req: Express.Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
) {
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new InvalidFileFormatError());
    }
}

export const uploadProfileImage = multer({ storage: storageProfileImage, fileFilter: imageFileFilter });

const storageIcon = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/public/icons");
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.trim().replaceAll(" ", "_");
        cb(null, Date.now() + fileName);
    },
});

export const uploadIcon = multer({ storage: storageIcon, fileFilter: imageFileFilter });
