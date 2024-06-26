import { z } from "zod";

const userSignup = z.object({
  username: z.string().min(3).max(30),
  password: z.string().min(6),
  firstName: z.string().max(50),
  lastName: z.string().max(50),
});

const userLogin = z.object({
  username: z.string().min(3).max(30),
  password: z.string().min(6),
});

const userUpdate = z.object({
  password: z.string().min(6).optional(),
  firstName: z.string().max(50).optional(),
  lastName: z.string().max(50).optional(),
});
export { userSignup, userLogin, userUpdate };
