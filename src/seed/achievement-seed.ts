import { prisma } from "../lib/prisma";

export const achievements = [
    {
        id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
        name: "Campeão!",
        description: "Fique em primeiro lugar no ranking.",
        iconId: "a0771cdd-ea68-4737-bb30-401fe7da4b98",
    },
    {
        id: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
        name: "Mais que Amigos",
        description: "Siga um usuário que lhe segue.",
        iconId: "11558194-e95f-45d0-a3af-aa8058ac2b37",
    },
    {
        id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
        name: "Desbravador de Exercícios",
        description: "Complete 10 exercícios de programação.",
        iconId: "35b91640-7b4e-4988-a9f9-8027b4280f5b",
    },
];

export async function createAchievements() {
    return prisma.achievement.createMany({
        data: achievements.map(achievement => ({
            id: achievement.id,
            name: achievement.name,
            description: achievement.description,
            iconId: achievement.iconId,
        })),
    });
}
