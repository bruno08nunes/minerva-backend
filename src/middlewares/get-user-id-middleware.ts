import { NextFunction, Request, Response } from "express";
import { signJwt, verifyJwt } from "../utils/jwt";
import { env } from "../env";
import { prisma } from "../lib/prisma";

export const getUserIdMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;
    let token = authHeader?.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : null;

    let decoded;

    if (token) {
        decoded = verifyJwt(token, env.JWT_SECRET);
    }

    if (
        !decoded ||
        typeof decoded !== "object" ||
        !("id" in decoded) ||
        !("role" in decoded)
    ) {
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) {
            next();
            return;
        }

        const refreshDecoded = verifyJwt(refreshToken, env.JWT_REFRESH_SECRET);

        if (
            !refreshDecoded ||
            typeof refreshDecoded !== "object" ||
            !("id" in refreshDecoded)
        ) {
            next();
            return;
        }

        const user = await prisma.user.findUnique({
            where: { id: refreshDecoded.id },
        });

        if (!user) {
            next();
            return;
        }

        token = signJwt({ id: user.id, role: user.role });

        if (token) {
            res.setHeader("x-access-token", token);
        }

        req.user = {
            id: user.id,
            role: user.role,
        };

        next();
        return;
    }

    req.user = {
        id: decoded.id,
        role: decoded.role,
    };

    next();
};
