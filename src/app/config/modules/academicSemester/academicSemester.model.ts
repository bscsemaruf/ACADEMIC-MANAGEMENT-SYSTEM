import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  academicSemesterCode,
  academicSemesterMonths,
  academicSemesterName,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemesterName,
    },
    code: { type: String, required: true, enum: academicSemesterCode },
    year: { type: String, required: true },
    startMonth: { type: String, required: true, enum: academicSemesterMonths },
    endMonth: { type: String, required: true, enum: academicSemesterMonths },
  },
  {
    timestamps: true,
  },
);

// doc middleware

academicSemesterSchema.pre('save', async function () {
  const semesterIsExists = await AcademicSemesterModel.findOne({
    name: this.name,
    year: this.year,
  });
  if (semesterIsExists) {
    throw new Error('This semester is already exist');
  }
});

export const AcademicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
