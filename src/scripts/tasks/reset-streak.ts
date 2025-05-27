import { prisma } from "../../lib/prisma";

// TODO: Add this cron job in the server
export async function resetStreak() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    const result = await prisma.user.updateMany({
        where: {
            OR: [{ lastActiveDay: { lt: yesterday } }, { lastActiveDay: null }],
        },
        data: {
            streak: 0,
        },
    });

    console.log(`✅ Streak reset for ${result.count} users.`);
}
