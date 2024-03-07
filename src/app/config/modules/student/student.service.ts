// import { TStudent } from './student.interface';

import { Student } from './student.model';

// const createStudentIntoDB = async (student: TStudent) => {
//   if (await Student.isUserExists(student.id)) {
//     throw new Error('User Already Exist');
//   }
//   const result = await Student.create(student);
//   return result;
// };

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.findOne({ id })
    .populate('user')
    .populate('academicSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  // console.log(result);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const deleteStudentToDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  // createStudentIntoDB,
  getSingleStudentFromDB,
  getAllStudentFromDB,
  deleteStudentToDB,
};
