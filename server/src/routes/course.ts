import { Router, Request, Response } from "express";

const courseRouter = Router();

courseRouter.route("/purchases").get((req: Request, res: Response) => {
  return res.send("all courses");
});

courseRouter.route("/purchase").post((req: Request, res: Response) => {
  return res.send("purchased");
});

export default courseRouter;
