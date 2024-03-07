import { UserServices } from './user.service';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Student create successfully',
    data: result,
  });
});

const getSingleUserDepartment = catchAsync(async (req, res) => {
  const { id: userId } = req.params;
  const result = await UserServices.getSingleUserFromDB(userId);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'User is find successfully',
    data: result,
  });
});
const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserFromDB();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Users are find successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
  getSingleUserDepartment,
  getAllUser,
};
