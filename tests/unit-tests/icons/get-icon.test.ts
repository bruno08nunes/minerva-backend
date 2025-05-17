import { InMemoryIconsRepository } from "../../../src/repositories/in-memory/in-memory-icons-repository";
import { IconServices } from "../../../src/services/icon-services";

let iconsRepository: InMemoryIconsRepository;
let service: IconServices;

describe("Get Icon Use Case", () => {
    beforeEach(() => {
        iconsRepository = new InMemoryIconsRepository();
        service = new IconServices(iconsRepository);
    });

    it("should be able to get icon by id", async () => {
        const { id: createdIconId } = await iconsRepository.create({
            url: "http://example.com/icon.jpg",
        });

        const icon = await service.getIconById(createdIconId);

        expect(icon.id).toEqual(createdIconId);
        expect(icon.url).toEqual("http://example.com/icon.jpg");
    });

    it("should not be able to get icon with wrong id", async () => {
        await expect(service.getIconById("non-existing-id")).rejects.toThrow(
            "Resource not found."
        );
    });
});
