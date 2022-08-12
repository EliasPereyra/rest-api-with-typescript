import mongoose from 'mongoose'

export interface UserInput {
  name: string;
  email: string;
  password: string;
}

export interface UserDocument {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true,
  }
)

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel
