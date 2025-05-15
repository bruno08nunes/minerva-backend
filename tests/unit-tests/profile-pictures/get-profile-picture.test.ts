import { InMemoryProfilePicturesRepository } from "./../../../src/repositories/in-memory/in-memory-profile-picture-repository";
import { ProfilePicturesService } from "./../../../src/services/profile-picture-services";

let profilePicturesRepository: InMemoryProfilePicturesRepository;
let service: ProfilePicturesService;

describe("Get Profile Picture Use Case", () => {
    beforeEach(() => {
        profilePicturesRepository = new InMemoryProfilePicturesRepository();
        service = new ProfilePicturesService(profilePicturesRepository);
    });

    it("should be able to get profile picture by id", async () => {
        const {id: createdProfilePictureId} = await profilePicturesRepository.create({
            url: "http://example.com/profile-picture.jpg",
        });

        const profilePicture = await service.getProfilePictureById(createdProfilePictureId);

        expect(profilePicture.id).toEqual(createdProfilePictureId);
        expect(profilePicture.url).toEqual("http://example.com/profile-picture.jpg");
    });

    it("should not be able to get profile picture with wrong id", async () => {
        await expect(service.getProfilePictureById("non-existing-id")).rejects.toThrow(
            "Resource not found."
        );
    });
});
