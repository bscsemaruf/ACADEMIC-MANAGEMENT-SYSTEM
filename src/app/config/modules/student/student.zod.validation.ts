import { z } from 'zod';

const NameValidationSchema = z.object({
  firstName: z.string().nonempty(),
  middleName: z.string().optional(),
  lastName: z.string().nonempty(),
});
const GuardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const LocalGuardianValidationSchema = z.object({
  name: z.string().nonempty(),
  contactNo: z.string().nonempty(),
  address: z.string().nonempty(),
});

const CreateStudentValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .max(20, { message: 'not more than 20 charecter' })
      .optional(),
    student: z.object({
      name: NameValidationSchema,
      gender: z.enum(['male', 'female']),
      dateOfBirth: z.string().nonempty(),
      email: z.string().email(),
      contactNo: z.string().nonempty(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: GuardianValidationSchema,
      localGuardian: LocalGuardianValidationSchema,
      academicSemester: z.string(),
      academicDepartment: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const StudentZodSchema = {
  StudentValidationSchema: CreateStudentValidationSchema,
};
