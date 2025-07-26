import { prisma } from "../lib/prisma";

export async function createProfilePictures() {
    return prisma.profilePicture.createMany({
        data: [
            {
                id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
                url: "girl.png",
            },
            {
                id: "e0527b12-6274-4928-b0c2-08a36a6dacbb",
                url: "girl-2.png",
            },
            {
                id: "76a46854-420a-42d6-9577-0dc6e2679272",
                url: "blond-girl.png",
            },
            {
                id: "fb9112db-3723-4b37-8d01-24d78b4693a7",
                url: "blond-girl-2.png",
            },
            {
                id: "900ec666-3949-4d0b-848f-e008a2d7c5ba",
                url: "buzzcut-girl.png",
            },
            {
                id: "b3c4b2b4-5fa0-4da5-bf4c-672a0b09c07b",
                url: "buzzcut-girl.png",
            },
            {
                id: "ebfecfbe-d485-4c78-a033-314cf967edeb",
                url: "buzzcut-girl-2.png",
            },
            {
                id: "bd5c082b-2667-432d-9932-02c16f3b8dfc",
                url: "bald-girl.png",
            },
            {
                id: "6a413ff5-e65c-4316-9f87-e77312227bce",
                url: "bald-girl-2.png",
            },
        ],
    });
}
