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
        });

        return users;
    }

    async getUserRankingPosition(id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
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
        };
    }
}
