import { prisma } from "../lib/prisma";
import { createIcons } from "./icon-seed";
import { createLessons } from "./lesson-seed";
import { createThemes } from "./theme-seed";
import { createTopics } from "./topic-seed";

export async function createSeeds() {
    try {
        await createIcons();
        await createThemes();
        await createTopics();
        await createLessons();

        console.log("🎉 Seeds created successfully!");
    } catch (err) {
        console.error("Error creating seeds:", err);
        prisma.$disconnect();
        process.exit(1);
    } finally {
        prisma.$disconnect();
        process.exit(0);
    }
}

createSeeds();