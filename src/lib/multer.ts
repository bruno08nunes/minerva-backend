import multer from "multer";

const storageProfileImage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/public/profile-images");
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.trim().replaceAll(" ", "_");
        cb(null, Date.now() + fileName);
    },
});

export const uploadProfileImage = multer({ storage: storageProfileImage });