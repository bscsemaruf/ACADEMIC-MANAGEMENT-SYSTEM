import express from 'express';
import validationRequest from '../../../middlewares/validationRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controller';
const router = express.Router();

router.post(
  '/create-academic-faculty',
  validationRequest(AcademicFacultyValidation.createAcademicFacultyValidation),
  AcademicFacultyControllers.createAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
