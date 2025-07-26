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
            {
                id: "b915a155-1fb2-4a06-8439-3604c125d596",
                url: "bald-boy.png"
            },
            {
                id: "4923a6d2-5c49-45ed-a00c-8762d15a213a",
                url: "bald-boy-2.png"
            },
            {
                id: "f7cbd4a5-f4ce-4003-9db6-8d16c0b319f7",
                url: "blond-boy.png"
            },
            {
                id: "24b158db-4f58-42d3-b3ad-ab9e18d28afc",
                url: "blond-boy-2.png"
            },
            {
                id: "8636b47f-245b-4945-9418-713a8097c270",
                url: "blond-boy-3.png"
            },
            {
                id: "53e0c48f-314b-402d-a5c7-af52ab65dad8",
                url: "boy.png"
            },
            {
                id: "da9bc1b2-b3c8-4103-bfb2-3c188ceabf8e",
                url: "buzzcut-boy.png"
            },
            {
                id: "ab30f3ca-08e1-4123-abfb-de07f0a19231",
                url: "buzzcut-boy-2.png"
            },
            {
                id: "5c91725b-305a-4144-b574-e63aa6180b99",
                url: "brain.png"
            },
            {
                id: "cef1d338-460c-44d7-9aae-d18c1d2fc3df",
                url: "robot.png"
            },
            {
                id: "615544c5-87e0-4568-a20b-d11ec162209f",
                url: "no-picture.png"
            }
        ],
    });
}
