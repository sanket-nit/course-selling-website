import mongoose from "mongoose";

const enrolmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
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

const Enrolment = mongoose.model("Enrolment", enrolmentSchema);

export default Enrolment;
