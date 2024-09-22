import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  refreshToken: { type: String },
});

instructorSchema.pre("save", function (next) {
  this.createdAt = new Date();
  next();
});

const Instructor = mongoose.model("Instructor", instructorSchema);

export default Instructor;
