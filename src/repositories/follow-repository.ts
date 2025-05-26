import { Follow } from "../generated/prisma";

export interface IFollowRepository {
    hasFollower(followerId: string, followingId: string): Promise<boolean>;
    getFollowers(userId: string): Promise<Follow[]>;
    getFollowing(userId: string): Promise<Follow[]>;
    createFollow(followerId: string, followingId: string): Promise<Follow>;
    deleteFollow(followerId: string, followingId: string): Promise<Follow>;
}