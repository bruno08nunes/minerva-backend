export default class BadRequestError extends Error {
    constructor() {
        super("Bad request.");
        this.name = "BadRequestError";
    }
}