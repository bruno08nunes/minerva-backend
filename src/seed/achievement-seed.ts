import { prisma } from "../lib/prisma";

export const achievements = [
    {
        id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
        name: "Campeão!",
        description: "Fique em primeiro lugar no ranking.",
        iconId: "a0771cdd-ea68-4737-bb30-401fe7da4b98",
        type: "RANKING",
        amount: 1
    },
    {
        id: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
        name: "Mais que Amigos",
        description: "Siga um usuário que lhe segue.",
        iconId: "11558194-e95f-45d0-a3af-aa8058ac2b37",
        type: "FOLLOW",
        amount: 1
    },
    {
        id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
        name: "Semana de Ouro",
        description: "Complete 7 dias de sequência.",
        iconId: "35b91640-7b4e-4988-a9f9-8027b4280f5b",
        type: "STREAK",
        amount: 7
    },
    {
        id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r9",
        name: "Iniciante da Lógica",
        description: "Complete seu primeiro exercício.",
        iconId: "a0771cdd-ea68-4737-bb30-401fe7da4b98",
        type: "STREAK",
        amount: 1
    },
    {
        id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r0",
        name: "Nerd",
        description: "Complete 3 dias de sequência.",
        iconId: "35b91640-7b4e-4988-a9f9-8027b4280f5b",
        type: "STREAK",
        amount: 3
    },
] as const;

export async function createAchievements() {
    return prisma.achievement.createMany({
        data: achievements.map(achievement => ({
            id: achievement.id,
            name: achievement.name,
            description: achievement.description,
            iconId: achievement.iconId,
            amount: achievement.amount,
            type: achievement.type
        })),
    });
}
