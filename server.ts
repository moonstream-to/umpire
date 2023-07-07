import express, { Request, Response } from 'express';
import hello from './routes/hello';
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/hello', hello);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Umpire Leaderboard Validation Service running on ${PORT}`) });

export default app;