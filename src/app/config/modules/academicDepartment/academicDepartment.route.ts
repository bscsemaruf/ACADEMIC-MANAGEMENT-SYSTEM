import express from 'express';
import validationRequest from '../../../middlewares/validationRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academic-department',
  validationRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidation,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.get('/:id', AcademicDepartmentControllers.getSingleAcademicDepartment);
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartment);

export const AcademicDepartmentRoutes = router;
