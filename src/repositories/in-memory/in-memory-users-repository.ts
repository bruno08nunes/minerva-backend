import { $Enums, Prisma, User } from "../../generated/prisma";
import { randomUUID } from "node:crypto";

import { IUserRepository } from "../users-repository";

export class InMemoryUsersRepository implements IUserRepository {
    public items: User[] = [];

    async findById(id: string) {
        const user = this.items.find((user) => user.id === id) || null;

        return user ? { ...user, profilePicture: null } : null;
    }

    async findByEmail(email: string) {
        const user = this.items.find((user) => user.email === email) || null;

        return user;
    }

    async findByUsername(username: string) {
        const user =
            this.items.find((user) => user.username === username) || null;

        return user ? { ...user, profilePicture: null } : null;
    }

    async create(data: Prisma.UserCreateInput) {
        const user = {
            name: data.name,
            email: data.email,
            username: data.username,
            password: data.password,
            id: randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
        } as User;

        this.items.push(user);

        return user;
    }

    async update(id: string, data: Prisma.UserUpdateInput) {
        const userIndex = this.items.findIndex((user) => user.id === id);
        const user = this.items[userIndex];
        this.items[userIndex] = {
            ...user,
            ...data,
            updatedAt: new Date(),
        } as User;

        return this.items[userIndex];
    }

    async delete(id: string) {
        const userIndex = this.items.findIndex((user) => user.id === id);
        const user = this.items[userIndex];
        this.items.splice(userIndex, 1);

        return user;
    }

    async getTopUsersByWeeklyXP(amount: number) {
        const topUsers = this.items
            .filter((user) => user.semanalXP !== undefined)
            .sort((a, b) => (b.semanalXP || 0) - (a.semanalXP || 0))
            .slice(0, amount);

        return topUsers;
    }

    async getUserRankingPosition(id: string) {
        const user = this.items.find((user) => user.id === id);

        if (!user) {
            return null;
        }

        const sortedUsers = this.items
            .filter((u) => u.semanalXP !== undefined)
            .sort((a, b) => (b.semanalXP || 0) - (a.semanalXP || 0));

        const position = sortedUsers.findIndex((u) => u.id === id) + 1;

        return {
            id: user.id,
            name: user.name,
            username: user.username,
            semanalXP: user.semanalXP,
            position,
        };
    }

    async incrementXp(id: string, amount: number) {
        const userIndex = this.items.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return null;
        }

        const user = this.items[userIndex];
        const newSemanalXP = (user.semanalXP || 0) + amount;
        const newTotalXP = (user.totalXP || 0) + amount;

        this.items[userIndex] = {
            ...user,
            semanalXP: newSemanalXP,
            totalXP: newTotalXP,
            updatedAt: new Date(),
        } as User;

        return this.items[userIndex];
    }

    async updateStreak(id: string) {
        const userIndex = this.items.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return null;
        }

        const user = this.items[userIndex];
        const newStreak = (user.streak || 0) + 1;

        this.items[userIndex] = {
            ...user,
            streak: newStreak,
            lastActiveDay: new Date(),
            updatedAt: new Date(),
        } as User;

        return this.items[userIndex];
    }

    async resetStreak(id: string) {
        const userIndex = this.items.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return null;
        }

        const user = this.items[userIndex];

        this.items[userIndex] = {
            ...user,
            streak: 0,
            lastActiveDay: new Date(),
            updatedAt: new Date(),
        } as User;

        return this.items[userIndex];
    }
}
