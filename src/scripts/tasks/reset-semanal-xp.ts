import { prisma } from "../../lib/prisma";

// TODO: Add this cron job in the server
export async function resetWeeklyXP() {
    const result = await prisma.user.updateMany({
        data: {
            semanalXP: 0,
        },
    });
    console.log(`Weekly XP reset for ${result.count} users.`);
}
