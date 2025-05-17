import { InMemoryIconsRepository } from "../../../src/repositories/in-memory/in-memory-icons-repository";
import { IconServices } from "../../../src/services/icon-services";

let iconsRepository: InMemoryIconsRepository;
let service: IconServices;

describe("Delete Icon Use Case", () => {
    beforeEach(() => {
        iconsRepository = new InMemoryIconsRepository();
        service = new IconServices(iconsRepository);
    });

    it("should be able to delete an icon", async () => {
        const { id: createdIconId } = await iconsRepository.create({
            url: "http://example.com/icon.jpg",
        });

        const deletedIcon = await service.deleteIcon(createdIconId);

        const icon = await iconsRepository.findById(createdIconId);
        
        expect(deletedIcon.id).toEqual(createdIconId);
        expect(icon).toBeNull();
    });

    it("should not be able to delete an icon with wrong id", async () => {
        await expect(service.deleteIcon("non-existing-id")).rejects.toThrow(
            "Resource not found."
        );
    });
});
