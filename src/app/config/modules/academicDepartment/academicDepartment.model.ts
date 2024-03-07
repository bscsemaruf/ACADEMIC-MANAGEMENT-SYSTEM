import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';

export const academicDepartmentSchema = new Schema<TAcademicDepartment>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicFaculty',
  },
});

academicDepartmentSchema.pre('save', async function (next) {
  const departmentIsExists = await AcademicDepartment.findOne({
    name: this.name,
  });
  if (departmentIsExists) {
    throw new Error('This department is already exist');
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
