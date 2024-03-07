import { z } from 'zod';

const UserValidationSchema = z.object({
  id: z.string(),
  password: z
    .string({ invalid_type_error: 'password must be string' })
    .max(20)
    .optional(),
});

export const userValidation = {
  UserValidationSchema,
};
