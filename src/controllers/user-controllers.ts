import { Request, Response } from "express";
import { PrismaUsersRepository } from "../repositories/prisma/prisma-users-repository";
import { UserService } from "../services/user-services";
import InvalidCredentialsError from "../utils/errors/invalid-credentials";
import NotFoundError from "../utils/errors/not-found";
import { z } from "zod";
import UserAlreadyExistsError from "../utils/errors/user-already-exists";
import { signJwt } from "../utils/jwt";
import BadRequestError from "../utils/errors/bad-request-error";

const userService = new UserService(new PrismaUsersRepository());

export async function getUserByIdController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const user = await userService.getUserById(id);

        if (!user) {
            throw new NotFoundError();
        }

        const { password, email, ...safeUser } = user;

        res.json({
            user: safeUser,
            success: true,
            message: "User found.",
        });
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(404).json({
                message: error.message || "User not found.",
                success: false,
            });
            return;
        }

        throw error;
    }
}

export async function getUserByUsernameController(req: Request, res: Response) {
    const { username } = req.params;

    try {
        const user = await userService.getUserByUsername(username);

        if (!user) {
            throw new NotFoundError();
        }

        const { password, email, ...safeUser } = user;

        res.json({
            user: safeUser,
            success: true,
            message: "User found.",
        });
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(404).json({
                message: error.message || "User not found.",
                success: false,
            });
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

        const token = signJwt({ id: user.id, role: user.role });
        if (!token) {
            throw new Error("Token generation failed.");
        }

        const refreshToken = signJwt({ id: user.id, role: user.role }, "7d", "refresh");
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

        const { password: _, email: __, ...safeUser } = user;

        res.json({
            message: "Login successful.",
            user: safeUser,
            success: true,
            token: token,
        });
        return;
    } catch (error) {
        if (error instanceof InvalidCredentialsError) {
            res.status(401).json({
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
        username: z.string().min(3),
    });

    const { name, email, password, username } = registerBodySchema.parse(req.body);

    let user;

    try {
        user = await userService.createUser({ name, email, password, username });
    } catch (error) {
        if (error instanceof UserAlreadyExistsError) {
            res.status(409).json({
                message: error.message || "User already exists.",
                success: false,
            });
        }

        throw error;
    }

    const token = signJwt({ id: user.id, role: user.role });
    if (!token) {
        throw new Error("Token generation failed.");
    }
    const refreshToken = signJwt({ id: user.id, role: user.role }, "7d", "refresh");
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
        token: token,
    });
}

export async function updateUserProfileController(req: Request, res: Response) {
    const { id } = req.params;
    const { name, profilePictureId, username } = req.body;

    const updateBodySchema = z.object({
        name: z.string().optional(),
        profilePictureId: z.string().optional(),
        username: z.string().optional(),
    });

    const { name: newName, profilePictureId: newProfilePictureId, username: newUsername } =
        updateBodySchema.parse({ name, profilePictureId, username });

    try {
        const user = await userService.updateUserProfile(id, {
            name: newName,
            profilePictureId: newProfilePictureId,
            username: newUsername,
        });

        if (!user) {
            throw new NotFoundError();
        }

        const { password, email, ...safeUser } = user;

        res.json({
            message: "User updated successfully.",
            success: true,
            user: safeUser
        });
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(404).json({
                message: error.message || "User not found.",
                success: false,
            });
            return;
        }

        if (error instanceof BadRequestError) {
            res.status(400).json({
                message: error.message || "Bad request.",
                success: false,
            });
            return;
        }

        throw error;
    }
}

export async function deleteUserController(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const user = await userService.deleteUser(id);

        if (!user) {
            throw new NotFoundError();
        }

        res.json({
            message: "User deleted successfully.",
            success: true
        });
    } catch (error) {
        if (error instanceof NotFoundError) {
            res.status(404).json({
                message: error.message || "User not found.",
                success: false,
            });
            return;
        }

        throw error;
    }
}