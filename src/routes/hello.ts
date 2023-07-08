import axios from 'axios';
import express, { Request, Response } from 'express';

const router = express.Router();
const PORT = process.env.PORT || 5000;

router.get('/', async (_: Request, res: Response) => {
  return res.status(200).json({ msg: "Hello World!!!" });
});

router.get('/:name', async (req: Request, res: Response) => {
  return res.status(200).json({ msg: `Hello ${req.params.name}!!!` });
});

router.post('/', async (req: Request, res: Response) => {
  const name: string = req.body.name;

  let echo = await axios.get(`http://localhost:${PORT}/hello/${name}`);

  return res.status(200).json(echo.data);
});

export default router;
