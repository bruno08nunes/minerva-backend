import { IFollowRepository } from "../repositories/follow-repository";
import NotFoundError from "../utils/errors/not-found";

export class FollowServices {
    constructor(private followRepository: IFollowRepository) {}

    async getFollowers(userId: string) {
        return this.followRepository.getFollowers(userId);
    }

    async getFollowing(userId: string) {
        return this.followRepository.getFollowing(userId);
    }

    async createFollow(followerId: string, followingId: string) {
        return this.followRepository.createFollow(followerId, followingId);
    }

    async deleteFollow(followerId: string, followingId: string) {
        const hasFollower = await this.followRepository.hasFollower(followerId, followingId);

        if (!hasFollower) {
            throw new NotFoundError();
        }

        return this.followRepository.deleteFollow(followerId, followingId);
    }
}