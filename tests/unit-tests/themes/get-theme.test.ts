import { ThemeService } from "../../../src/services/theme-services";
import { InMemoryThemesRepository } from "../../../src/repositories/in-memory/in-memory-themes-repository";

let themeRepository: InMemoryThemesRepository;
let themeService: ThemeService;

describe("Get Theme Use Case", () => {
    beforeEach(() => {
        themeRepository = new InMemoryThemesRepository();
        themeService = new ThemeService(themeRepository);
    });

    it("should be able to get a theme", async () => {
        await themeRepository.create({
            name: "Existing Theme",
            description: "This is an existing theme.",
            slug: "existing-theme-slug",
            iconId: "icon-123",
        });

        const theme = await themeService.getThemeBySlug("existing-theme-slug");
        expect(theme).toBeDefined();
        expect(theme.slug).toBe("existing-theme-slug");
    });

    it("should not be able to get a theme for a non-existing theme", async () => {
        await expect(
            themeService.getThemeBySlug("non-existing-theme-slug")
        ).rejects.toThrow("Resource not found.");
    });
});
