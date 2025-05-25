import { AchievementServices } from "../../../src/services/achievement-services";
import { InMemoryAchievementsRepository } from "../../../src/repositories/in-memory/in-memory-achievements-repository";

let achievementRepository: InMemoryAchievementsRepository;
let service: AchievementServices;

describe("Get Achievement Use Case", () => {
    beforeEach(() => {
        achievementRepository = new InMemoryAchievementsRepository();
        service = new AchievementServices(achievementRepository);
    });

    it("should be able to update an achievement", async () => {
        const achievement = await achievementRepository.create({
            name: "Old Achievement",
            description: "Old description",
            iconId: "icon-uuid",
        });

        const updatedAchievement = await service.updateAchievement(
            achievement.id,
            {
                name: "Updated Achievement",
                description: "Updated description",
            }
        );

        expect(updatedAchievement).toHaveProperty("id");
        expect(updatedAchievement.name).toBe("Updated Achievement");
    });

    it("should not be able to update a non-existing achievement", async () => {
        await expect(
            service.updateAchievement("non-existent-id", {
                name: "Updated Achievement",
            })
        ).rejects.toThrow("Resource not found.");
    });
});
