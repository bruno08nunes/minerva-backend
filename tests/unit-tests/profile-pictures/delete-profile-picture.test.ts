import { InMemoryProfilePicturesRepository } from "../../../src/repositories/in-memory/in-memory-profile-picture-repository";
import { ProfilePicturesService } from "../../../src/services/profile-picture-services";

let profilePicturesRepository: InMemoryProfilePicturesRepository;
let service: ProfilePicturesService;

describe("Delete Profile Picture Use Case", () => {
    beforeEach(() => {
        profilePicturesRepository = new InMemoryProfilePicturesRepository();
        service = new ProfilePicturesService(profilePicturesRepository);
    });

    it("should be able to delete a profile picture", async () => {
        const { id: createdProfilePictureId } = await profilePicturesRepository.create({
            url: "http://example.com/profile-picture.jpg",
        });

        const deletedProfilePicture = await service.deleteProfilePicture(createdProfilePictureId);

        const profilePicture = await profilePicturesRepository.findById(createdProfilePictureId);

        expect(deletedProfilePicture.id).toEqual(createdProfilePictureId);
        expect(profilePicture).toBeNull();
    });

    it("should not be able to delete a profile picture with wrong id", async () => {
        await expect(service.deleteProfilePicture("non-existing-id")).rejects.toThrow(
            "Resource not found."
        );
    });
});