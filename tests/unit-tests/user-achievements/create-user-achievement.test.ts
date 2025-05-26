import { InMemoryUserAchievementsRepository } from "../../../src/repositories/in-memory/in-memory-user-achievements-repository";
import { UserAchievementServices } from "../../../src/services/user-achievement-services";

let userAchievementRepository: InMemoryUserAchievementsRepository;
let service: UserAchievementServices;

describe("Create User Achievement Use Case", () => {
    beforeEach(() => {
        userAchievementRepository = new InMemoryUserAchievementsRepository();
        service = new UserAchievementServices(userAchievementRepository);
    });

    it("should be able to create a user achievement", async () => {
        const { userId, achievementId } = await service.createUserAchievement(
            "user-1",
            "achievement-1"
        );

        const userAchievement =
            await userAchievementRepository.getUserAchievement(
                userId,
                achievementId
            );

        expect(userAchievement).not.toBeNull();
        expect(userAchievement?.userId).toEqual("user-1");
    });
});
