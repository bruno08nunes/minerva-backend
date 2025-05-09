export default class UserAlreadyExistsError extends Error {
    constructor() {
        super("User already exists with this email.");
        this.name = "UserAlreadyExistsError";
    }
}