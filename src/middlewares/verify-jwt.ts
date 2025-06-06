import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt";
import { env } from "../env";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({
            success: false,
            message: "Unauthorized. Missing or invalid Authorization header.",
        });
        return;
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyJwt(token, env.JWT_SECRET);

    if (!decoded || typeof decoded !== "object" || !("id" in decoded) || !("role" in decoded)) {
        res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
        return;
    }

    req.user = {
        id: decoded.id,
        role: decoded.role,
    };

    next();
};
