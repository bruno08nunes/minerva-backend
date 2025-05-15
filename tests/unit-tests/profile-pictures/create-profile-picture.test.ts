import { InMemoryProfilePicturesRepository } from "../../../src/repositories/in-memory/in-memory-profile-picture-repository";
import { ProfilePicturesService } from "../../../src/services/profile-picture-services";

let profilePicturesRepository: InMemoryProfilePicturesRepository;
let service: ProfilePicturesService;

describe("Create Profile Picture Use Case", () => {
    beforeEach(() => {
        profilePicturesRepository = new InMemoryProfilePicturesRepository();
        service = new ProfilePicturesService(profilePicturesRepository);
    });

    it("should be able to create a profile picture", async () => {
        const { id: createdProfilePictureId } = await service.createProfilePicture({
            url: "http://example.com/profile-picture.jpg",
        });

        const profilePicture = await profilePicturesRepository.findById(createdProfilePictureId);

        expect(profilePicture).not.toBeNull();
        expect(profilePicture?.url).toEqual("http://example.com/profile-picture.jpg");
    });
});