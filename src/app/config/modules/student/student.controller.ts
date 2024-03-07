import { RequestHandler } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student: studentData } = req.body;
//     const zodData = StudentZodSchema.parse(studentData);

//     const result = await StudentServices.createStudentIntoDB(zodData);

//     res.status(200).json({
//       status: 'success',
//       message: 'student create successfully',
//       data: result,
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       status: 'false',
//       message: error.message || 'Something went ong',
//       error,
//     });
//   }
// };

const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;

  const result = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Student find successfully',
    data: result,
  });
});

const getAllStudent: RequestHandler = catchAsync((req, res) => {
  const result = StudentServices.getAllStudentFromDB;
  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Student retrive successfully',
    data: result,
  });
});

const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentToDB(studentId);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Student delete successfully',
    data: result,
  });
});

export const StudentControllers = {
  getSingleStudent,
  getAllStudent,
  deleteStudent,
};
