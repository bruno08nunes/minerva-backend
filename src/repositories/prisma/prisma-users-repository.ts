import { Prisma } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";

import { IUserRepository } from "../users-repository";

export class PrismaUsersRepository implements IUserRepository {
    async findById(id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                profilePicture: true,
            },
        });

        return user;
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        return user;
    }

    async findByUsername(username: string) {
        const user = await prisma.user.findUnique({
            where: {
                username,
            },
            include: {
                profilePicture: true,
            },
        });

        return user;
    }

    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data,
        });

        return user;
    }

    async update(id: string, data: Prisma.UserUpdateInput) {
        const user = await prisma.user.update({
            where: {
                id,
            },
            data,
        });

        return user;
    }

    async delete(id: string) {
        const user = await prisma.user.delete({
            where: {
                id,
            },
        });

        return user;
    }

    async getTopUsersByWeeklyXP(amount: number, userId?: string) {
        const users = await prisma.user.findMany({
            orderBy: {
                semanalXP: "desc",
            },
            take: amount,
            select: {
                username: true,
                semanalXP: true,
                profilePicture: true,
            }
        });

        return users;
    }

    async getUserRankingPosition(id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                profilePicture: true
            }
        });

        if (!user) {
            return null;
        }

        const rankingPosition = await prisma.user.count({
            where: {
                semanalXP: {
                    gt: user.semanalXP,
                },
            },
        });

        return {
            rankingPosition: rankingPosition + 1,
            username: user.username,
            semanalXp: user.semanalXP,
            profilePicture: user.profilePicture
        };
    }

    async incrementXp(id: string, amount: number) {
        const user = await prisma.user.update({
            where: {
                id,
            },
            data: {
                semanalXP: {
                    increment: amount,
                },
                totalXP: {
                    increment: amount
                }
            },
        });

        return user;
    }
}
