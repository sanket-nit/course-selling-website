import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: mongoose.Types.ObjectId,
});

const adminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const purchasedSchema = new mongoose.Schema({
  courseId: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId,
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);
const Purchased = mongoose.model("Purchased", purchasedSchema);

export { User, Admin, Course, Purchased };
