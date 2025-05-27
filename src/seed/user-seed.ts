import { prisma } from "../lib/prisma";

export async function createUsersDev() {
    return prisma.user.createMany({
        data: [
            {
                id: "564ff414-5a71-4335-bef8-c7d5b6ed7d01",
                name: "Bruno Nunes",
                username: "bruno08nunes",
                email: "bruno@email.com",
                password: "admin123",
                role: "ADMIN",
            },
            {
                id: "d5443a36-c238-421b-9853-d305dcd96e3b",
                name: "Isabelle Scholl",
                username: "isa_scholl",
                email: "isa@email.com",
                password: "admin123",
                role: "USER",
            },
        ],
    });
}
