import { Router, Request, Response } from "express";

const userRouter = Router();

userRouter.route("/signup").post((req: Request, res: Response) => {});

userRouter.route("/signin").get((req: Request, res: Response) => {
  return res.send("signin");
});

userRouter.route("/purchases").get((req: Request, res: Response) => {
  return res.send("purchase");
});

userRouter.route("/courses").get((req: Request, res: Response) => {
  return res.send("all courses");
});

export default userRouter;
