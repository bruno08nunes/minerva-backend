import { prisma } from "../../lib/prisma";
import { IFollowRepository } from "../follow-repository";

export class PrismaFollowRepository implements IFollowRepository {
    async hasFollower(followerId: string, followingId: string) {
        const follow = await prisma.follow.findUnique({
            where: {
                followerId_followingId: {
                    followerId,
                    followingId
                }
            },
        });
        return !!follow;
    }

    async getFollowers(userId: string) {
        return prisma.follow.findMany({
            where: { followingId: userId },
            include: {
                follower: {
                    select: {
                        id: true,
                        username: true,
                        profilePicture: true,
                    },
                }
            }
        });
    }

    async getFollowing(userId: string) {
        return prisma.follow.findMany({
            where: { followerId: userId },
            include: {
                following: {
                    select: {
                        id: true,
                        username: true,
                        profilePicture: true,
                    }
                }
            }
        });
    }

    async createFollow(followerId: string, followingId: string) {
        return prisma.follow.create({
            data: { followingId, followerId },
        });
    }

    async deleteFollow(followerId: string, followingId: string) {
        return prisma.follow.delete({
            where: {
                followerId_followingId: {
                    followerId,
                    followingId
                }
            },
        });
    }
}