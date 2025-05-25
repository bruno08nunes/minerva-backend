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
import iconRoutes from "./routes/icon-routes";
import path from "node:path";
import themeRouter from "./routes/theme-routes";
import topicRouter from "./routes/topic-routes";
import lessonRouter from "./routes/lesson-routes";
import exerciseRouter from "./routes/exercise-routes";
import choiceRouter from "./routes/choice-routes";
import explanationRouter from "./routes/explanation-routes";
import progressRouter from "./routes/progress-routes";
import achievementRouter from "./routes/achievement-routes";

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
app.use("/", profilePictureRoutes);
app.use("/", iconRoutes);
app.use("/", themeRouter);
app.use("/", topicRouter);
app.use("/", lessonRouter);
app.use("/", exerciseRouter);
app.use("/", choiceRouter);
app.use("/", explanationRouter);
app.use("/", progressRouter);
app.use("/", achievementRouter);

app.use("/api/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

app.use("/uploads/profile-images", express.static(path.join(__dirname, "public", "profile-images")));
app.use("/uploads/icons", express.static(path.join(__dirname, "public", "icons")));

// Global Error Handler
app.use(errorHandler);

export default app;