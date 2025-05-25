import { AchievementServices } from "../../../src/services/achievement-services";
import { InMemoryAchievementsRepository } from "../../../src/repositories/in-memory/in-memory-achievements-repository";

let achievementRepository: InMemoryAchievementsRepository;
let service: AchievementServices;

describe("Get Achievement Use Case", () => {
    beforeEach(() => {
        achievementRepository = new InMemoryAchievementsRepository();
        service = new AchievementServices(achievementRepository);
    });

    it("should be able to list all achievements", async () => {
        await achievementRepository.create({
            name: "Achievement 1",
            description: "Description for achievement 1",
            iconId: "icon-uuid-1",
        });

        await achievementRepository.create({
            name: "Achievement 2",
            description: "Description for achievement 2",
            iconId: "icon-uuid-2",
        });

        const achievements = await service.listAchievements();

        expect(achievements).toHaveLength(2);
        expect(achievements[0]).toHaveProperty("id");
        expect(achievements[0].name).toBe("Achievement 1");
        expect(achievements[1].name).toBe("Achievement 2");
    });

    it("should return an empty array if no achievements exist", async () => {
        const achievements = await service.listAchievements();
        expect(achievements).toHaveLength(0);
    });
});
