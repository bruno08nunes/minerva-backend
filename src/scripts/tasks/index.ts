import { prisma } from "../../lib/prisma";
import { resetWeeklyXP } from "./reset-semanal-xp";
import { resetStreak } from "./reset-streak";

async function runAllTasks() {
  console.log("🚀 Starting scheduled tasks...");

  try {
    await resetWeeklyXP();
    await resetStreak();

    console.log("🎉 All tasks completed successfully.");
  } catch (error) {
    console.error("❌ Error during task execution:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

runAllTasks();
