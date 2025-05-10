import { Request, Response } from "express";
import { PrismaUsersRepository } from "../repositories/prisma/prisma-users-repository";
import { UserService } from "../services/user-services";
import InvalidCredentialsError from "../utils/errors/invalid-credentials";
import NotFoundError from "../utils/errors/not-found";
import { z } from "zod";
import UserAlreadyExistsError from "../utils/errors/user-already-exists";

const userService = new UserService(new PrismaUsersRepository());

export async function getUserByIdController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const user = await userService.getUserById(id);

        if (!user) {
            throw new NotFoundError();
        }

        res.json({ user: {...user, email: undefined, password: undefined}, success: true, message: "User found." });
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(404).json({ message: error.message || "User not found.", success: false });
            return;
        }

        throw error;
    }
}

export async function loginController(req: Request, res: Response) {
    const authenticateBodySchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });

    const { email, password } = authenticateBodySchema.parse(req.body);

    try {
        const user = await userService.login(email, password);

        if (!user) {
            throw new InvalidCredentialsError();
        }

        res.json({
            message: "Login successful.",
            user: { ...user, email: undefined, password: undefined },
            success: true,
            token: "token",
        });
        return;
    } catch (error) {
        if (error instanceof InvalidCredentialsError) {
            res.status(400).json({
                message: "Invalid credentials.",
                success: false,
            });
            return;
        }

        throw error;
    }
}

export async function registerUserController(req: Request, res: Response) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
    });

    const { name, email, password } = registerBodySchema.parse(req.body);

    try {
        await userService.createUser({ name, email, password });
    } catch (error) {
        if (error instanceof UserAlreadyExistsError) {
            res.status(409).json({
                message: error.message || "User already exists.",
                success: false,
            });
        }

        throw error;
    }

    res.status(201).json({
        message: "User created successfully.",
        success: true,
        user: { name, email },
        token: "token"
    });
}
