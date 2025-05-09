import { Request, Response } from "express";
import { PrismaUsersRepository } from "../repositories/prisma/prisma-users-repository";
import { UserService } from "../services/user-services";

const userService = new UserService(new PrismaUsersRepository());

export async function getUserByIdController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const user = await userService.getUserById(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        
        res.json(user);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}
