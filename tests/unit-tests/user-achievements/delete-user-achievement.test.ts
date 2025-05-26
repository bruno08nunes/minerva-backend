import { InMemoryUserAchievementsRepository } from "../../../src/repositories/in-memory/in-memory-user-achievements-repository";
import { UserAchievementServices } from "../../../src/services/user-achievement-services";

let userAchievementRepository: InMemoryUserAchievementsRepository;
let service: UserAchievementServices;

describe("Delete User Achievement Use Case", () => {
    beforeEach(() => {
        userAchievementRepository = new InMemoryUserAchievementsRepository();
        service = new UserAchievementServices(userAchievementRepository);
    });
    
    it("should be able to delete a user achievement", async () => {
        await userAchievementRepository.createUserAchievement("user-1", "achievement-1");

        const userAchievement = await service.deleteUserAchievement("user-1", "achievement-1");

        const deletedUserAchievement = await userAchievementRepository.getUserAchievement("user-1", "achievement-1");

        expect(userAchievement).not.toBeNull();
        expect(userAchievement.userId).toEqual("user-1");
        expect(deletedUserAchievement).toBeNull();
    });

    it("should throw an error if user achievement does not exist", async () => {
        await expect(service.deleteUserAchievement("user-1", "achievement-1")).rejects.toThrow("Resource not found.");
    });
});
