import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt";
import { env } from "../env";

export function verifyUserRoleMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token not provided" });
    }

    const token = authHeader.split(" ")[1];
    const payload = verifyJwt(token, env.JWT_SECRET);

    if (!payload || typeof payload !== "object" || !("role" in payload)) {
        return res.status(403).json({ message: "Invalid token" });
    }

    if (payload.role !== "ADMIN") {
        return res.status(403).json({ message: "Access denied: Admins only" });
    }

    req.user = { role: payload.role, id: payload.id };

    next();
}