import { Router, type Request, type Response } from 'express';

const router = Router();

// GET /api/schedule/:userId
router.get('/:userId', async (req: Request, res: Response) => {
  // TODO: fetch from DB with JOIN
  return res.json({ data: [] });
});

// POST /api/schedule
router.post('/', async (req: Request, res: Response) => {
  return res.status(201).json({ id: 'new-id', ...req.body });
});

export default router;
