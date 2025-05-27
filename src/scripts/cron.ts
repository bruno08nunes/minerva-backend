import { resetWeeklyXP } from "./tasks/reset-semanal-xp";
import { resetStreak } from "./tasks/reset-streak";

const tasks = {
    "reset-semanal-xp": resetWeeklyXP,
    "reset-streak": resetStreak,
    all: async () => {
        await resetWeeklyXP();
        await resetStreak();
    },
};

async function main() {
    const arg = process.argv[2] || "all";

    const task = tasks[arg as keyof typeof tasks];

    if (!task) {
        console.error(`❌ Task '${arg}' not found.`);
        console.log("Available tasks: ", Object.keys(tasks).join(", "));
        process.exit(1);
    }

    try {
        console.log(`🚀 Executing task: ${arg}`);
        await task();
        console.log(`🎉 Task '${arg}' completed successfully.`);
    } catch (error) {
        console.error(`❌ Error executing task '${arg}':`, error);
        process.exit(1);
    } finally {
        process.exit(0);
    }
}

main();
