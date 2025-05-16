import { Prisma, User } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";

import { IUserRepository } from "../users-repository";

export class PrismaUsersRepository implements IUserRepository {
    async findById(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        return user;
    }

    async findByUsername(username: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                username,
            },
        });

        return user;
    }

    async create(data: Prisma.UserCreateInput): Promise<User> {
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
                id
            }
        });

        return user;
    }
}
