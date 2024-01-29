import Joi from "joi";
import { CreateUserParams } from "protocols";

export const userSchema = Joi.object<CreateUserParams>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});