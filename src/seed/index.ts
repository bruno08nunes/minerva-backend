import { env } from "../env";
import { prisma } from "../lib/prisma";
import { createAchievements } from "./achievement-seed";
import { createExercises } from "./exercise-seed";
import { createExplanations } from "./explanation-seed";
import { createIcons } from "./icon-seed";
import { createLessons } from "./lesson-seed";
import { createProfilePictures } from "./profile-picture-seed";
import { createThemes } from "./theme-seed";
import { createTopics } from "./topic-seed";
import { createUsersDev } from "./user-seed";

export async function createSeeds() {
    try {
        console.log("🌱 Starting seed creation...");

        await createIcons();
        await createThemes();
        await createTopics();
        await createLessons();
        await createExercises();
        await createExplanations();
        await createAchievements();
        await createProfilePictures();

        if (env.NODE_ENV === "dev") {
            console.log("🌱 Seeding development data...");
            await createUsersDev();
        }

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