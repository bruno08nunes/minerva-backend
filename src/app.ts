// Packages
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import SwaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

// Middlewares
import { errorHandler } from "./middlewares/error-handler";

// Routes
import userRoutes from "./routes/user-routes";
import refreshRoutes from "./routes/refresh-token-routes";
import profilePictureRoutes from "./routes/profile-picture-routes";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000", // ou a URL do seu frontend
    credentials: true, // permite cookies
  }));

// Routes
app.use("/", userRoutes);
app.use("/auth", refreshRoutes);
app.use("/", profilePictureRoutes)

app.use("/api/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

// Global Error Handler
app.use(errorHandler);

export default app;