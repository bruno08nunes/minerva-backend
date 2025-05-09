import { env } from "./env/index";
import app from "./app";

const PORT = env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
