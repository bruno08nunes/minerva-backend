export default class InvalidFileFormatError extends Error {
    constructor() {
        super("Only images are allowed (jpeg, png, webp, gif)");
        this.name = "InvalidFileFormatError";
    }
}
