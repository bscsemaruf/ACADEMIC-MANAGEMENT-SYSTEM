import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    console.log('data');
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      status: 'success',
      message: 'student create successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  // const {studentId} = req.params;
  // console.log(typeof studentId, studentId);
  const studentId = req.params.studentId;

  const result = await StudentServices.getSingleStudentFromDB(studentId);
  res.status(200).json({
    status: 'success',
    message: 'student find successfully',
    data: result,
  });
};

const getAllStudent = (req: Request, res: Response) => {
  try {
    const result = StudentServices.getAllStudentFromDB;
    res.status(200).json({
      status: 'successful',
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getSingleStudent,
  getAllStudent,
};
