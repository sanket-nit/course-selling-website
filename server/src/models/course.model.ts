import mongoose from "mongoose";

const lessonsSchema = new mongoose.Schema({
  title: String,
  duration: String,
  order: Number,
  content: String,
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  imageUrl: { type: String },
  instructor: { type: mongoose.Types.ObjectId, ref: "Instructor", required: true },
  category: { type: String },
  lessons: [lessonsSchema],
  totalDuration: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

courseSchema.pre("save", function (next) {
  this.createdAt = new Date();
  next();
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
