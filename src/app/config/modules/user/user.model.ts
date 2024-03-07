import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../..';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    id: { type: String, unique: true },
    password: { type: String },
    needsPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['admin', 'faculty', 'student'] },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  // console.log(this);
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password!, Number(config.salt_rounds));
  next();
});

userSchema.post('save', function (doc, next) {
  const user = doc;
  user.password = '';
  next();
});

export const User = model<TUser>('User', userSchema);
