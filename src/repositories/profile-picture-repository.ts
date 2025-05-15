import { ProfilePicture, Prisma } from "../generated/prisma";

export interface IProfilePicturesRepository {
    list(): Promise<ProfilePicture[]>;
    findById(id: string): Promise<ProfilePicture | null>;
    create(data: Prisma.ProfilePictureCreateInput): Promise<ProfilePicture>;
    delete(id: string): Promise<ProfilePicture>;
}