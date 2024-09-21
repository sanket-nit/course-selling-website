import mongoose from "mongoose";

const enrolmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
  },
  course: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
  },
  enrolledAt: {
    type: Date,
    default: Date.now,
  },
  completedLessons: [mongoose.Types.ObjectId],
});
