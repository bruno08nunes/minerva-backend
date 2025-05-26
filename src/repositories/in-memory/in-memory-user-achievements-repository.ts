import { IUserAchievementsRepository } from "../user-achievements-repository";

type UserAchievement = {
    userId: string;
    achievementId: string;
    achievedAt: Date;
};

export class InMemoryUserAchievementsRepository
    implements IUserAchievementsRepository
{
    public userAchivements: UserAchievement[] = [];

    async getUserAchievement(userId: string, achievementId: string) {
        return (
            this.userAchivements.find(
                (userAchievement) =>
                    userAchievement.userId === userId &&
                    userAchievement.achievementId === achievementId
            ) || null
        );
    }

    async getUserAchievements(userId: string) {
        return this.userAchivements.filter(
            (userAchievement) => userAchievement.userId === userId
        );
    }

    async createUserAchievement(userId: string, achievementId: string) {
        const userAchievement = {
            userId,
            achievementId,
            achievedAt: new Date(),
        };

        this.userAchivements.push(userAchievement);

        return userAchievement;
    }

    async deleteUserAchievement(userId: string, achievementId: string) {
        const userAchievementIndex = this.userAchivements.findIndex(
            (userAchievement) =>
                userAchievement.userId === userId &&
                userAchievement.achievementId === achievementId
        );

        return this.userAchivements.splice(userAchievementIndex, 1)[0];
    }
}
