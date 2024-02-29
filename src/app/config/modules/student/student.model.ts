import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Name, Student } from './student.interface';

const NameSchema = new Schema<Name>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const GuardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String },
  contactNo: { type: String },
  address: { type: String },
});

const StudentSchema = new Schema<Student>({
  id: { type: String },
  name: NameSchema,
  gender: { type: String, enum: ['male', 'female'], required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: { type: String },
  isActive: { type: String, enum: ['active', 'blocked'], required: true },
});

export const StudentModel = model<Student>('Student', StudentSchema);
