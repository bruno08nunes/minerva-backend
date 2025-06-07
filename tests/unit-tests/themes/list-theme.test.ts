import { ThemeService } from "./../../../src/services/theme-services";
import { InMemoryThemesRepository } from "./../../../src/repositories/in-memory/in-memory-themes-repository";

let themeRepository: InMemoryThemesRepository;
let service: ThemeService;

describe("List Theme Use Case", () => {
    beforeEach(() => {
        themeRepository = new InMemoryThemesRepository();
        service = new ThemeService(themeRepository);
    });

    it("should be able to list themes", async () => {
        const { id: createdId } = await themeRepository.create({
            name: "Lorem",
            description: "Lorem ipsum dolor met.",
            iconId: "123",
            slug: "lorem"
        });

        const themes = await service.listThemes();

        expect(themes).toHaveLength(1);
        expect(themes[0].id).toEqual(createdId);
        expect(themes[0].name).toEqual("Lorem");
    });
});
