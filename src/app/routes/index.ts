import { AcademicDepartmentRoutes } from './../config/modules/academicDepartment/academicDepartment.route';
import express from 'express';
import { UserRoutes } from '../config/modules/user/user.route';
import { StudentRoutes } from '../config/modules/student/student.route';
import { AcademicSemesterRoutes } from '../config/modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../config/modules/academicFaculty/academicFaculty.route';

const router = express.Router();

const modulesRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

// router.use('/users', UserRoutes);
// router.use('students', StudentRoutes);

export default router;
