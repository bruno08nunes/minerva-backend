import { prisma } from "../lib/prisma";

export const achievements = [
    {
        id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
        name: "Iniciante em Programação",
        description: "Complete sua primeira lição de programação.",
        iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
        async check(userId: string) {
            const completedLessons = await prisma.progress.count({
                where: {
                    userId: userId,
                    isCompleted: true,
                },
            });
            return completedLessons >= 1;
        }
    },
    {
        id: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
        name: "Explorador de Conceitos",
        description: "Leia 1 explicação sobre conceitos de programação.",
        iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
    },
    {
        id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
        name: "Desbravador de Exercícios",
        description: "Complete 10 exercícios de programação.",
        iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
        async check(userId: string) {
            const completedExercises = await prisma.progress.count({
                where: {
                    userId: userId,
                    isCompleted: true,
                },
            });
            return completedExercises >= 10;
        }
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
