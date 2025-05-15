import { Prisma } from "../generated/prisma";
import { IProfilePicturesRepository } from "../repositories/profile-picture-repository";
import NotFoundError from "../utils/errors/not-found";

export class ProfilePicturesService {
    constructor(private profilePictureRepository: IProfilePicturesRepository) {}

    async createProfilePicture(data: Prisma.ProfilePictureCreateInput) {
        return this.profilePictureRepository.create({ url: data.url });
    }

    async getProfilePictureById(id: string) {
        const profilePicture = await this.profilePictureRepository.findById(id);

        if (!profilePicture) {
            throw new NotFoundError();
        }

        return profilePicture;
    }

    async deleteProfilePicture(id: string) {
        const profilePicture = await this.profilePictureRepository.findById(id);

        if (!profilePicture) {
            throw new NotFoundError();
        }

        const deletedProfilePicture = await this.profilePictureRepository.delete(id);

        return deletedProfilePicture;
    }

    async listProfilePictures() {
        return this.profilePictureRepository.list();
    }
}