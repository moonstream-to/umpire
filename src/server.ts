import cors from 'cors';
import express from 'express';

import hello from './routes/hello';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/hello', hello);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Umpire Leaderboard Validation Service running on ${PORT}`) });

export default app;
