import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  type TAcademicSemesterCodeMapper = {
    [key: string]: string;
  };

  const academicSemesterCodeMapper: TAcademicSemesterCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };

  if (academicSemesterCodeMapper[payload.name] !== payload.code) {
    throw new Error('Semester code is invalid');
  }
  const result = await AcademicSemesterModel.create(payload);
  return result;
};

const getAllSemesterFromDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllSemesterFromDB,
};
