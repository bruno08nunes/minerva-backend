import { prisma } from "../lib/prisma";

export async function createUsersAchievementsDev() {
    return prisma.userAchievement.createMany({
        data: [
            {
                userId: "564ff414-5a71-4335-bef8-c7d5b6ed7d01",
                achievementId: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6"
            },
            {
                userId: "564ff414-5a71-4335-bef8-c7d5b6ed7d01",
                achievementId: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7"
            },
            {
                userId: "564ff414-5a71-4335-bef8-c7d5b6ed7d01",
                achievementId: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8"
            },
        ]
    });
}
