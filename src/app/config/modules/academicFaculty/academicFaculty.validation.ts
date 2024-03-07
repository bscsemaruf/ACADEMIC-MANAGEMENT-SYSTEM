import { z } from 'zod';

const createAcademicFacultyValidation = z.object({
  body: z.object({
    name: z.string({ required_error: 'Faculty name must required' }),
  }),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidation,
};
