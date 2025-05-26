import { Follow } from "../../generated/prisma";
import { IFollowRepository } from "../follow-repository";
import { randomUUID } from "node:crypto";

export class InMemoryFollowRepository implements IFollowRepository {
    private follows: Follow[] = [];

    async hasFollower(followerId: string, followingId: string) {
        return this.follows.some(
            (follow) =>
                follow.followerId === followerId &&
                follow.followingId === followingId
        );
    }

    async getFollowers(userId: string) {
        return this.follows.filter((follow) => follow.followingId === userId);
    }

    async getFollowing(userId: string) {
        return this.follows.filter((follow) => follow.followerId === userId);
    }

    async createFollow(followerId: string, followingId: string) {
        const newFollow = {
            followerId,
            followingId,
            id: randomUUID(),
            createdAt: new Date(),
        };
        this.follows.push(newFollow);
        return newFollow;
    }

    async deleteFollow(followerId: string, followingId: string) {
        const index = this.follows.findIndex(
            (follow) =>
                follow.followerId === followerId &&
                follow.followingId === followingId
        );
        if (index === -1) throw new Error("Follow not found");
        const [deletedFollow] = this.follows.splice(index, 1);
        return deletedFollow;
    }
}
