import { Prisma, User } from "../../generated/prisma/index.js";
import { prisma } from "../../lib/prisma.js";

import { IUserRepository } from "../users-repository.js";

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

    async create(data: Prisma.UserCreateInput): Promise<User> {
        const user = await prisma.user.create({
            data,
        });

        return user;
    }
}
