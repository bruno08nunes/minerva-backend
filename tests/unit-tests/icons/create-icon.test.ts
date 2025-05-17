import { InMemoryIconsRepository } from "../../../src/repositories/in-memory/in-memory-icons-repository";
import { IconServices } from "../../../src/services/icon-services";

let iconsRepository: InMemoryIconsRepository;
let service: IconServices;

describe("Create Icon Use Case", () => {
    beforeEach(() => {
        iconsRepository = new InMemoryIconsRepository();
        service = new IconServices(iconsRepository);
    });

    it("should be able to create an icon", async () => {
        const { id } = await service.createIcon({
            url: "http://example.com/icon.jpg",
        });

        const icon = await iconsRepository.findById(id);

        expect(icon).not.toBeNull();
        expect(icon?.url).toEqual("http://example.com/icon.jpg");
    });
});
