import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import gradesRouter from './routes/grades';
import scheduleRouter from './routes/schedule';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => res.json({ status: 'ok', service: 'academic-service' }));
app.use('/api/grades', gradesRouter);
app.use('/api/schedule', scheduleRouter);

app.listen(PORT, () => {
  console.log(`Academic Service running on port ${PORT}`);
});
