import Instructor from "../models/instructor.model";
import { Request, Response } from "express";
import { INTERNAL_SERVER_ERROR } from "../constants/error-messages";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

export const handleInstructiorSignup = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;
  const hashedPassword = await hash(password, 16);
  const createdInstructor = new Instructor({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });
  try {
    await createdInstructor.save();
    return res.status(201).send({
      message: "Instructor registered successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: INTERNAL_SERVER_ERROR,
    });
  }
};

export const handleInstructorSignin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const foundInstructor = await Instructor.findOne({
      email,
    });
    if (!foundInstructor) {
      return res.send({
        message: "User does not exists",
      });
    }
    const doesMatch = await compare(password, foundInstructor.password);
    if (doesMatch) {
      const jwtToken = sign({ email: foundInstructor.email }, process.env.SECRET_ACCESS_TOKEN, {
        expiresIn: "10s",
      });

      const refreshToken = sign({ email: foundInstructor.email }, process.env.REFRESH_ACCESS_TOKEN, {
        expiresIn: "1d",
      });

      foundInstructor.refreshToken = refreshToken;
      await foundInstructor.save();
      res.cookie("jwt", refreshToken, { httpOnly: true, secure: true, sameSite: "none", path: "/api", maxAge: 24 * 60 * 60 * 1000 });
    }
    return res.status(401).send({
      message: "Invalid password",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: INTERNAL_SERVER_ERROR,
    });
  }
};
