import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  refreshToken: { type: String },
});

userSchema.pre("save", function (next) {
  this.createdAt = new Date();
  next();
});

const User = mongoose.model("user", userSchema);

export default User;
