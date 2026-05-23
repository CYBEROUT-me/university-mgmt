import { Router, type Request, type Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const router = Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    // TODO: fetch user from DB via Prisma
    // const user = await prisma.user.findUnique({ where: { email } });
    // if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    //   return res.status(401).json({ error: 'Invalid credentials' });
    // }

    const accessToken = jwt.sign(
      { userId: 'mock-id', email, role: 'student' },
      process.env.JWT_SECRET || 'dev-secret',
      { expiresIn: '15m' }
    );

    return res.json({
      token: accessToken,
      user: { id: 'mock-id', email, full_name: 'Тестовий Студент', role: 'student' },
    });
  } catch (err) {
    return res.status(400).json({ error: 'Validation failed' });
  }
});

// POST /api/auth/logout
router.post('/logout', (_, res: Response) => {
  // TODO: invalidate refresh token in Redis
  return res.status(204).send();
});

export default router;
