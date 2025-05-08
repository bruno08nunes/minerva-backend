import { env } from "./env/index.js";
import app from "./app.js";

const PORT = env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
