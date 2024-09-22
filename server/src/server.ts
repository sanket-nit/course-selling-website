import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import userRouter from "./routes/user";
import courseRouter from "./routes/course";
import adminRoutes from "./routes/admin";
import cookieParser from "cookie-parser";

import { Request, Response } from "express";
import connectToDataBase from "./config/db.config";
import instructorRouter from "./routes/instructor";

const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/instructor", instructorRouter);

app.get("/api/v1/health-check", (req: Request, res: Response) => {
  return res.send({
    status: "Working",
  });
});

connectToDataBase()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("app running at http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
