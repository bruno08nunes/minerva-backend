import { ThemeService } from "./../../../src/services/theme-services";
import { InMemoryThemesRepository } from "./../../../src/repositories/in-memory/in-memory-themes-repository";

let themeRepository: InMemoryThemesRepository;
let service: ThemeService;

describe("Delete Profile Picture Use Case", () => {
    beforeEach(() => {
        themeRepository = new InMemoryThemesRepository();
        service = new ThemeService(themeRepository);
    });

    it("should be able to delete a theme", async () => {
        const { id: createdId } = await themeRepository.create({
            name: "Lorem",
            description: "Lorem ipsum dolor met.",
            iconId: "123",
            slug: "lorem"
        });

        const deletedTheme = await service.deleteTheme(createdId);

        const theme = await themeRepository.findById(createdId);

        expect(deletedTheme.id).toEqual(createdId);
        expect(theme).toBeNull();
    });

    it("should not be able to delete a theme with wrong id", async () => {
        await expect(
            service.deleteTheme("non-existing-id")
        ).rejects.toThrow("Resource not found.");
    });
});
