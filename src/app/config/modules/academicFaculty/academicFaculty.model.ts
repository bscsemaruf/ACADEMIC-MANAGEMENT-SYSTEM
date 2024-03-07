import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

export const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicFaculty = model<TAcademicFaculty>(
  'AcademicFaculty',
  academicFacultySchema,
);
