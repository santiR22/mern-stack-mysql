import express, { urlencoded } from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';
import taskRoutes from './routes/tasks.routes.js';

const app = express();

//middlewares...
app.use(cors());
app.use(express.json());

//routes...
app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT);
console.log(`server on port ${PORT}`);
