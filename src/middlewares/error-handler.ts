import { Request, Response, NextFunction } from "express";
import { env } from "../env/index";
import { ZodError } from "zod";

export interface AppError extends Error {
    status?: number;
}

export const errorHandler = (
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof ZodError) {
        res.status(400).send({
            message: "Validation error.",
            issues: err.format(),
            success: false,
        });
        return;
    }

    if (env.NODE_ENV !== "production") {
        console.error(err);
    } else {
        // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
    }

    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
    });
};
