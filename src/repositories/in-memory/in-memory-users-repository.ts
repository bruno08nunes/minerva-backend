import { Prisma, User } from "../../generated/prisma";
import { randomUUID } from "node:crypto";

import { IUserRepository } from "../users-repository";

export class InMemoryUsersRepository implements IUserRepository {
    public items: User[] = [];

    async findById(id: string): Promise<User | null> {
        const user = this.items.find((user) => user.id === id) || null;

        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = this.items.find((user) => user.email === email) || null;

        return user;
    }

    async findByUsername(username: string): Promise<User | null> {
        const user = this.items.find((user) => user.username === username) || null;

        return user;
    }

    async create(data: Prisma.UserCreateInput): Promise<User> {
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
}
