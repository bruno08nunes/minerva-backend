import { AchievementServices } from "../../../src/services/achievement-services";
import { InMemoryAchievementsRepository } from "../../../src/repositories/in-memory/in-memory-achievements-repository";

let achievementRepository: InMemoryAchievementsRepository;
let service: AchievementServices;

describe("Get Achievement Use Case", () => {
    beforeEach(() => {
        achievementRepository = new InMemoryAchievementsRepository();
        service = new AchievementServices(achievementRepository);
    });

    it("should be able to delete an achievement", async () => {
        const achievement = await achievementRepository.create({
            name: "Achievement to Delete",
            description: "This achievement will be deleted",
            iconId: "icon-uuid",
        });

        await service.deleteAchievement(achievement.id);

        const deletedAchievement = await achievementRepository.findById(
            achievement.id
        );

        expect(deletedAchievement).toBeNull();
    });

    it("should not be able to delete a non-existing achievement", async () => {
        await expect(
            service.deleteAchievement("non-existent-id")
        ).rejects.toThrow("Resource not found.");
    });
});
