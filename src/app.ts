import express from "express";
import cors from "cors";
import userRoutes from "./routes/user-routes";
import { errorHandler } from "./middlewares/error-handler";
import refreshRoutes from "./routes/refresh-token-routes";
import cookieParser from "cookie-parser";

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

// Global Error Handler
app.use(errorHandler);

export default app;