import { z } from 'zod';

const createAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({ required_error: 'Department name must required' }),
    academicFaculty: z.string(),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidation,
};
