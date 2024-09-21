import mongoose from "mongoose";

async function connectToDataBase() {
  return mongoose.connect(process.env.DATABASE_URL as string, {
    dbName: "course-site",
  });
}

export default connectToDataBase;
