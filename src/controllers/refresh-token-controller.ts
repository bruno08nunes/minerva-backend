import { Request, Response } from "express";
import { verifyJwt, signJwt } from "../utils/jwt";
import { env } from "../env";
import { UserService } from "../services/user-services";
import { PrismaUsersRepository } from "../repositories/prisma/prisma-users-repository";
import NotFoundError from "../utils/errors/not-found";

export async function refreshTokenController(req: Request, res: Response) {
    const token = req.cookies.refreshToken;

    if (!token) {
        res.status(401).json({
            message: "Refresh token missing.",
            success: false,
        });
        return;
    }

    const payload = verifyJwt(token, env.JWT_REFRESH_SECRET);
    const isInvalidPayload =
        !payload || typeof payload !== "object" || !("id" in payload);
    if (isInvalidPayload) {
        res.status(401).json({
            message: "Invalid refresh token.",
            success: false,
        });
        return;
    }

    const prismaUsersRepository = new PrismaUsersRepository();
    const userService = new UserService(prismaUsersRepository);

    const user = await userService.getUserById(payload.id as string);
    if (!user) {
        throw new NotFoundError();
    }

    const newAccessToken = signJwt({ id: user.id }, "1h", env.JWT_SECRET);

    const newRefreshToken = signJwt(
        { id: user.id },
        "7d",
        env.JWT_REFRESH_SECRET
    );

    res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/",
    });

    res.json({
        success: true,
        message: "Token refreshed.",
        token: newAccessToken,
    });
}
