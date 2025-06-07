export default class ThemeAlreadyExistsError extends Error {
    constructor() {
        super("Theme already exists.");
        this.name = "ThemeAlreadyExistsError";
    }
}