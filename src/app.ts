import express from "express";
import cors from "cors";
import userRoutes from "./routes/user-routes.js";
import { errorHandler } from "./middlewares/error-handler.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/", userRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;