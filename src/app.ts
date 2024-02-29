import express, { Application } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/config/modules/student/student.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

export default app;
