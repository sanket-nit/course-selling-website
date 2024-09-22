import * as z from "zod";

export const signupSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "email is required" }).email(),
    password: z.string({ required_error: "password is required" }).min(8),
    firstName: z.string({ required_error: "firstName is required" }).min(1),
    lastName: z.string({ required_error: "lastName is required" }).min(1),
  }),
});

export const signInSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "email is required" }).email(),
    password: z.string({ required_error: "password is required" }).min(8),
  }),
});
