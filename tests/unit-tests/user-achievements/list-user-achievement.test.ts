import { InMemoryUserAchievementsRepository } from "../../../src/repositories/in-memory/in-memory-user-achievements-repository";
import { UserAchievementServices } from "../../../src/services/user-achievement-services";

let userAchievementRepository: InMemoryUserAchievementsRepository;
let service: UserAchievementServices;

describe("List User Achievement Use Case", () => {
    beforeEach(() => {
        userAchievementRepository = new InMemoryUserAchievementsRepository();
        service = new UserAchievementServices(userAchievementRepository);
    });
    
    it("should be able to list user achievements", async () => {
        await userAchievementRepository.createUserAchievement("user-1", "achievement-1");
        await userAchievementRepository.createUserAchievement("user-1", "achievement-2");

        const userAchievements = await service.listUserAchievements("user-1");

        expect(userAchievements).toHaveLength(2);
        expect(userAchievements[0].userId).toEqual("user-1");
        expect(userAchievements[1].userId).toEqual("user-1");
    });

    it("should return an empty array if user has no achievements", async () => {
        const userAchievements = await service.listUserAchievements("user-2");

        expect(userAchievements).toHaveLength(0);
    });
});
