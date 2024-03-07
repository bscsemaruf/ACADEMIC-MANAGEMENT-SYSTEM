import { Schema, model } from 'mongoose';
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TName,
  TStudent,
} from './student.interface';

const NameSchema = new Schema<TName>({
  firstName: { type: String, required: [true, 'First name is required'] },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last name is required'] },
});

const GuardianSchema = new Schema<TGuardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const LocalGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, 'Local guardian name is required'] },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
  },
});

export const StudentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: 'User',
    },
    name: { type: NameSchema, required: [true, 'Student name is required'] },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: '{VALUE} is not valid input',
      },
      required: [true, 'Gender is required'],
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Date of birth is required'],
    },
    email: { type: String, required: [true, 'Email is required'] },
    contactNo: { type: String, required: [true, 'Contact number is required'] },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: { type: String },
    permanentAddress: { type: String },
    guardian: {
      type: GuardianSchema,
      required: [true, 'Guardian information is required'],
    },
    localGuardian: {
      type: LocalGuardianSchema,
      required: [true, 'Local guardian information is required'],
    },
    profileImg: { type: String },
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// virtual

StudentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// middleware quiries
StudentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } }).select('-password');
  next();
});
StudentSchema.pre('findOne', function (next) {
  this.findOne({ isDeleted: { $ne: true } }).select('-password');
  next();
});
StudentSchema.pre('aggregate', function () {
  this.pipeline().unshift(
    { $match: { isDeleted: { $ne: true } } },
    { $unset: 'password' },
  );
});
// middleware document

StudentSchema.statics.isUserExists = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const Student = model<TStudent, StudentModel>('Student', StudentSchema);
