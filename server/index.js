import express, { urlencoded } from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import { dirname, join } from "path";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//middlewares...
app.use(cors());
app.use(express.json());

//routes...
app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(__dirname, "../client/dist")));

app.listen(PORT);
console.log(`server on port ${PORT}`);
