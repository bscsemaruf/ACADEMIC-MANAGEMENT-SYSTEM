import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../../utils/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Academic create successfully',
    data: result,
  });
});

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllSemesterFromDB;
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'All semester is getting successfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
};
