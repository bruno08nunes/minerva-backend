import { ThemeService } from './../../../src/services/theme-services';
import { InMemoryThemesRepository } from './../../../src/repositories/in-memory/in-memory-themes-repository';

let themeRepository: InMemoryThemesRepository;
let service: ThemeService;

describe("Create Theme Use Case", () => {
    beforeEach(() => {
        themeRepository = new InMemoryThemesRepository();
        service = new ThemeService(themeRepository);
    });

    it("should be able to create a theme", async () => {
        const { id: createdId } = await service.createTheme({
            name: "Lorem",
            description: "Lorem ipsum dolor met.",
            iconId: "123"
        });

        const theme = await themeRepository.findById(createdId);

        expect(theme).not.toBeNull();
        expect(theme?.name).toEqual("Lorem");
    });

    it("should not be able to create a theme with the same slug", async () => {
        await service.createTheme({
            name: "Lorem",
            description: "Lorem ipsum dolor met.",
            iconId: "123",
            slug: "lorem"
        });

        await expect(() => {
            return service.createTheme({
                name: "Lorem",
                description: "Lorem ipsum dolor met.",
                iconId: "123",
                slug: "lorem"
            });
        }).rejects.toThrow("Theme already exists.");
    });
});