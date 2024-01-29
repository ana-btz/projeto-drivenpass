import { Router } from "express";
import { userSchema } from "schemas";
import { validateBody } from "middlewares";
import { createUser } from "controllers";

const userRouter = Router();

userRouter.post('/', validateBody(userSchema), createUser);

export { userRouter };