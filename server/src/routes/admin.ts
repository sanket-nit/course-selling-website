import { Router, Request, Response } from "express";
import { validate } from "../validations/validate";
import { signupSchema } from "../validations/schemas";

const adminRoutes = Router();

adminRoutes.route("/signup").post(validate(signupSchema), (req: Request, res: Response) => {
  return res.send("Hello");
});

adminRoutes.route("/signin").post((req: Request, res: Response) => {
  return res.send("signin");
});

export default adminRoutes;
