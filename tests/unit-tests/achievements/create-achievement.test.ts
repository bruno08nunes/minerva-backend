import { AchievementServices } from "../../../src/services/achievement-services";
import { InMemoryAchievementsRepository } from "../../../src/repositories/in-memory/in-memory-achievements-repository";

let achievementRepository: InMemoryAchievementsRepository;
let service: AchievementServices;

describe("Create Achievement Use Case", () => {
    beforeEach(() => {
        achievementRepository = new InMemoryAchievementsRepository();
        service = new AchievementServices(achievementRepository);
    });

    it("should be able to create an achievement", async () => {
        const achievement = await service.createAchievement({
            name: "New Achievement",
            description: "Achievement description",
            iconId: "icon-uuid",
        });

        expect(achievement).toHaveProperty("id");
        expect(achievement.name).toBe("New Achievement");
    });
});
