import { ThemeService } from "./../../../src/services/theme-services";
import { InMemoryThemesRepository } from "./../../../src/repositories/in-memory/in-memory-themes-repository";

let themeRepository: InMemoryThemesRepository;
let service: ThemeService;

describe("Update Theme Use Case", () => {
    beforeEach(() => {
        themeRepository = new InMemoryThemesRepository();
        service = new ThemeService(themeRepository);
    });

    it("should be able to update a theme", async () => {
        const createdTheme = await themeRepository.create({
            name: "Lorem",
            description: "Lorem ipsum dolor it.",
            iconId: "123",
            slug: "lorem"
        });
        const updatedTheme = await service.updateTheme(createdTheme.id, {
            name: "Theme Updated",
        });
        expect(updatedTheme.name).toEqual("Theme Updated");
    });

    it("should not be able to update theme with wrong id", async () => {
        await themeRepository.create({
            name: "Lorem",
            description: "Lorem ipsum dolor it.",
            iconId: "123",
            slug: "lorem"
        });

        expect(async () => {
            await service.updateTheme("wrong-id", {
                name: "Theme Updated"
            });
        }).rejects.toThrow("Resource not found.");
    });
    
    it("should not be able to update theme with invalid data", async () => {
        const createdTheme = await themeRepository.create({
            name: "Lorem",
            description: "Lorem ipsum dolor it.",
            iconId: "123",
            slug: "lorem"
        });

        expect(async () => {
            await service.updateTheme(createdTheme.id, {});
        }).rejects.toThrow("Bad request.");
    });
});