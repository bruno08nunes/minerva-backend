import { IProfilePicturesRepository } from './../profile-picture-repository';
import { Prisma, ProfilePicture } from "../../generated/prisma";
import { randomUUID } from "node:crypto";

export class InMemoryProfilePicturesRepository implements IProfilePicturesRepository {
    public items: ProfilePicture[] = [];

    async list() {
        return this.items;
    }

    async findById(id: string) {
        const profilePicture = this.items.find((profilePicture) => profilePicture.id === id) || null;

        return profilePicture;
    }

    async create(data: Prisma.ProfilePictureCreateInput) {
        const profilePicture = {
            id: randomUUID(),
            ...data,
        };

        this.items.push(profilePicture);

        return profilePicture;
    }

    async delete(id: string) {
        const profilePictureIndex = this.items.findIndex((profilePicture) => profilePicture.id === id);
        const profilePicture = this.items[profilePictureIndex];
        this.items.splice(profilePictureIndex, 1);
        return profilePicture;
    }
}
