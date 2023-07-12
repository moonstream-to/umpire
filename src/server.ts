// Configures the Umpire express server and starts the server process

import cors from 'cors';
import express, {Request, Response} from 'express';

import { PORT, LEADERBOARD_ID } from './config';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/status', async (_: Request, res: Response) => {
  const responseBody = {LEADERBOARD_ID: LEADERBOARD_ID || ""}
  return res.status(200).json(responseBody);
});

app.listen(PORT, () => { console.log(`Umpire Leaderboard Validation Service running on ${PORT}`) });

export default app;
