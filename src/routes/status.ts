// Defines the /status route on the Umpire API.

import express, { Request, Response } from 'express';

import { LEADERBOARD_ID } from '../config';

const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
  const responseBody = {LEADERBOARD_ID: ""}
  if (LEADERBOARD_ID) {
    responseBody.LEADERBOARD_ID = LEADERBOARD_ID;
  }
  return res.status(200).json(responseBody);
});

export default router;
