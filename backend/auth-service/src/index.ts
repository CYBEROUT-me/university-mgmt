import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import authRouter from './routes/auth';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => res.json({ status: 'ok', service: 'auth-service' }));
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});

export default app;
