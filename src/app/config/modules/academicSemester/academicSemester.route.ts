import { AcademicSemesterControllers } from './academicSemester.controller';
import express from 'express';
import validationRequest from '../../../middlewares/validationRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validationRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemester);

export const AcademicSemesterRoutes = router;
