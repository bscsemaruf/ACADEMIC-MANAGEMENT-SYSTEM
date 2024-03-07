import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
      code: 1,
    },
  )
    .sort({ createdAt: -1 })

    .lean();
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generatedStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString();
  const lastStudentId = await findLastStudentId();
  // 2030 01 0001
  const currentStudentSemesterCode = payload.code;
  const currentStudentSemesterYear = payload.year;
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6); //01
  const lastStudentSemesterYear = lastStudentId?.substring(0, 4); //2030

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentStudentSemesterCode &&
    lastStudentSemesterYear === currentStudentSemesterYear
  ) {
    currentId = lastStudentId.substring(6);
  }
  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  return `${payload.year}${payload.code}${incrementId}`;
};
