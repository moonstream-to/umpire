// Configures the Umpire express server and starts the server process

import cors from 'cors';
import express from 'express';

import { PORT } from './config';
import status from './routes/status';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/status', status);

app.listen(PORT, () => { console.log(`Umpire Leaderboard Validation Service running on ${PORT}`) });

export default app;
