import express from 'express';
import { UserControllers } from './user.controller';

import { StudentZodSchema } from '../student/student.zod.validation';
import validationRequest from '../../../middlewares/validationRequest';

const router = express.Router();

router.post(
  '/create-student',
  validationRequest(StudentZodSchema.StudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
