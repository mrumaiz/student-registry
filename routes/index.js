import { Router } from 'express';
import studentRoutes from './student.routes';

const rootRouter = Router();
rootRouter.use('/student', studentRoutes);

module.exports = rootRouter;