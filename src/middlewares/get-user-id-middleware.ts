import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt";
import { env } from "../env";

export const getUserIdMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        next();
        return;
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyJwt(token, env.JWT_SECRET);

    if (!decoded || typeof decoded !== "object" || !("id" in decoded) || !("role" in decoded)) {
        next();
        return;
    }

    req.user = {
        id: decoded.id,
        role: decoded.role,
    };

    next();
};
