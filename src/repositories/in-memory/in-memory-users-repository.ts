import { Prisma, User } from "../../generated/prisma/index.js";
import { randomUUID } from "node:crypto";

import { IUserRepository } from "../users-repository.js";

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

    async create(data: Prisma.UserCreateInput): Promise<User> {
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            id: randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
        } as User;

        this.items.push(user);

        return user;
    }
}
