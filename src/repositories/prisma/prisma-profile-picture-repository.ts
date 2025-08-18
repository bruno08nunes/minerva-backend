import { Prisma } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { IProfilePicturesRepository } from "../profile-picture-repository";

export class PrismaProfilePictureRepository
    implements IProfilePicturesRepository
{
    async list() {
        return await prisma.profilePicture.findMany();
    }

    async findById(id: string) {
        return prisma.profilePicture.findUnique({
            where: {
                id,
            },
        });
    }

    async create(data: Prisma.ProfilePictureCreateInput) {
        const profilePicture = await prisma.profilePicture.create({
            data,
        });

        return {
            id: profilePicture.id,
            url: profilePicture.url,
            description: profilePicture.description,
        };
    }

    async delete(id: string) {
        const profilePicture = await prisma.profilePicture.delete({
            where: {
                id,
            },
        });

        return {
            id: profilePicture.id,
            url: profilePicture.url,
            description: profilePicture.description,
        };
    }
}
