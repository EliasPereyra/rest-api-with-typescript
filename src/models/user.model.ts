import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config'

export interface UserInput {
  name: string;
  email: string;
  password: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
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

userSchema.pre("save", async function (next) {
  let user = this as UserDocument

  if (!user.isModified("password")) {
    return next()
  }

  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'))

  const hash = await bcrypt.hashSync(user.password, salt)

  user.password = hash

  return next()
})

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel
