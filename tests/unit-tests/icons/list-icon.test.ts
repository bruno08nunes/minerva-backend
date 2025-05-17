import { InMemoryIconsRepository } from "../../../src/repositories/in-memory/in-memory-icons-repository";
import { IconServices } from "../../../src/services/icon-services";

let iconsRepository: InMemoryIconsRepository;
let service: IconServices;

describe("List Icons Use Case", () => {
    beforeEach(() => {
        iconsRepository = new InMemoryIconsRepository();
        service = new IconServices(iconsRepository);
    });

    it("should be able to list icons", async () => {
        const { id: createdIconId } = await iconsRepository.create({
            url: "http://example.com/icon.jpg",
        });

        const icons = await service.listIcons();

        expect(icons).toHaveLength(1);
        expect(icons[0].id).toEqual(createdIconId);
        expect(icons[0].url).toEqual("http://example.com/icon.jpg");
    });
});