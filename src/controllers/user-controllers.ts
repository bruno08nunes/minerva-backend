import { Request, Response } from "express";
import { PrismaUsersRepository } from "../repositories/prisma/prisma-users-repository";
import { UserService } from "../services/user-services";
import InvalidCredentialsError from "../utils/errors/invalid-credentials";
import NotFoundError from "../utils/errors/not-found";
import { z } from "zod";
import UserAlreadyExistsError from "../utils/errors/user-already-exists";
import { signJwt } from "../lib/jwt";

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

        const token = signJwt({ id: user.id });
        if (!token) {
            throw new Error("Token generation failed.");
        }
        
        const refreshToken = signJwt({ id: user.id }, "7d", "refresh");
        if (!refreshToken) {
            throw new Error("Refresh token generation failed.");
        }

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({
            message: "Login successful.",
            user: { ...user, email: undefined, password: undefined },
            success: true,
            token: token,
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

    let user;

    try {
        user = await userService.createUser({ name, email, password });
    } catch (error) {
        if (error instanceof UserAlreadyExistsError) {
            res.status(409).json({
                message: error.message || "User already exists.",
                success: false,
            });
        }

        throw error;
    }

    const token = signJwt({ id: user.id });
    if (!token) {
        throw new Error("Token generation failed.");
    }
    const refreshToken = signJwt({ id: user.id }, "7d", "refresh");
    if (!refreshToken) {
        throw new Error("Refresh token generation failed.");
    }

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    
    res.status(201).json({
        message: "User created successfully.",
        success: true,
        user: { id: user.id, name, email },
        token: token
    });
}
