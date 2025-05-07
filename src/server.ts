import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { env } from "./env/index.js";

const app = express();
const PORT = env.PORT || 3333;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});