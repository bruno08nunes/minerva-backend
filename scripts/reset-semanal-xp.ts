import { prisma } from "../src/lib/prisma";

// TODO: Add this cron job in the server
async function resetWeeklyXP() {
    try {
        const result = await prisma.user.updateMany({
            data: {
                semanalXP: 0,
            },
        });
        console.log(`Weekly XP reset for ${result.count} users.`);
    } catch (error) {
        console.error("Error resetting weekly XP:", error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

resetWeeklyXP();
