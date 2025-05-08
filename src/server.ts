import express from "express";
import cors from "cors";
import { env } from "./env/index.js";
import userRoutes from "./routes/user-routes.js";

const app = express();
const PORT = env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
