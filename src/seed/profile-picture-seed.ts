import { prisma } from "../lib/prisma";

export async function createProfilePictures() {
    return prisma.profilePicture.createMany({
        data: [
            {
                id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
                url: "minerva.png",
            },
        ],
    });
}