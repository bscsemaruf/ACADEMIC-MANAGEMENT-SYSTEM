import { AcademicSemesterModel } from './../academicSemester/academicSemester.model';
import config from '../..';

import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generatedStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};
  // set default pass
  userData.password = password || (config.default_password as string);

  // set student role

  userData.role = 'student';
  // set generally manual id

  const admissionSemester = await AcademicSemesterModel.findById(
    payload.academicSemester,
  );

  userData.id = await generatedStudentId(admissionSemester);

  // create user
  const newUser = await User.create(userData);
  // create student
  // return newUser;
  // console.log(newUser);
  if (Object.keys(newUser).length) {
    // set id, _id as user
    payload.id = newUser.id;
    payload.user = newUser._id;
    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

const getSingleUserFromDB = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};

export const UserServices = {
  createStudentIntoDB,
  getSingleUserFromDB,
  getAllUserFromDB,
};
