import { InMemoryProfilePicturesRepository } from "../../../src/repositories/in-memory/in-memory-profile-picture-repository";
import { ProfilePicturesService } from "../../../src/services/profile-picture-services";

let profilePicturesRepository: InMemoryProfilePicturesRepository;
let service: ProfilePicturesService;

describe("List Profile Pictures Use Case", () => {

    beforeEach(() => {
        profilePicturesRepository = new InMemoryProfilePicturesRepository();
        service = new ProfilePicturesService(profilePicturesRepository);
    });

    it("should be able to list profile pictures", async () => {
        const {id: createdProfilePictureId} = await profilePicturesRepository.create({
            url: "http://example.com/profile-picture.jpg",
        });

        const profilePictures = await service.listProfilePictures();

        expect(profilePictures).toHaveLength(1);
        expect(profilePictures[0].id).toEqual(createdProfilePictureId);
        expect(profilePictures[0].url).toEqual("http://example.com/profile-picture.jpg");
    });
});
