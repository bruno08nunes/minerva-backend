import { AchievementServices } from "../../../src/services/achievement-services";
import { InMemoryAchievementsRepository } from "../../../src/repositories/in-memory/in-memory-achievements-repository";

let achievementRepository: InMemoryAchievementsRepository;
let service: AchievementServices;

describe("Get Achievement Use Case", () => {
    beforeEach(() => {
        achievementRepository = new InMemoryAchievementsRepository();
        service = new AchievementServices(achievementRepository);
    });

    it("should be able to get an achievement by ID", async () => {
        const achievement = await achievementRepository.create({
            name: "Test Achievement",
            description: "This is a test achievement",
            iconId: "icon-uuid",
        });

        const foundAchievement = await service.getAchievementById(achievement.id);

        expect(foundAchievement).toHaveProperty("id");
        expect(foundAchievement.name).toBe("Test Achievement");
    });

    it("should not be able to get an achievement by non-existing ID", async () => {
        await expect(service.getAchievementById("non-existent-id")).rejects.toThrow(
            "Resource not found."
        );
    });
});
