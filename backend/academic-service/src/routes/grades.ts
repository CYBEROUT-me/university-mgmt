import { Router, type Request, type Response } from 'express';
import { z } from 'zod';

const router = Router();

const gradeSchema = z.object({
  student_id: z.string().uuid(),
  course_id: z.string().uuid(),
  score: z.number().min(0).max(100),
});

// GET /api/grades?studentId=xxx
router.get('/', async (req: Request, res: Response) => {
  const { studentId } = req.query;
  // TODO: prisma.grade.findMany({ where: { student_id: studentId } })
  return res.json({ data: [], total: 0 });
});

// POST /api/grades
router.post('/', async (req: Request, res: Response) => {
  try {
    const body = gradeSchema.parse(req.body);
    // TODO: prisma.grade.create({ data: { ...body, graded_at: new Date() } })
    return res.status(201).json({ id: 'new-id', ...body, graded_at: new Date() });
  } catch {
    return res.status(400).json({ error: 'Validation failed' });
  }
});

// PUT /api/grades/:id
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { score } = z.object({ score: z.number().min(0).max(100) }).parse(req.body);
  // TODO: prisma.grade.update({ where: { id }, data: { score } })
  return res.json({ id, score });
});

// DELETE /api/grades/:id
router.delete('/:id', async (req: Request, res: Response) => {
  // TODO: prisma.grade.delete({ where: { id: req.params.id } })
  return res.status(204).send();
});

export default router;
