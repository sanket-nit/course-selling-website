import { Router } from "express";
import { handleInstructiorSignup, handleInstructorSignin } from "../controllers/auth.controller";
import { validate } from "../validations/validate";
import { signInSchema, signupSchema } from "../validations/validationSchemas";

const instructorRouter = Router();

instructorRouter.route("/signup").post(validate(signupSchema), handleInstructiorSignup);

instructorRouter.route("/signin").post(validate(signInSchema), handleInstructorSignin);

export default instructorRouter;
