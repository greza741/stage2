import Joi from "joi";
import { LoginDTO, RegisterDTO } from "../../dto/auth.dto";

export const loginSchema = Joi.object<LoginDTO>({
    email: Joi.string().email(),
    password: Joi.string(),
})

export const registerSchema = Joi.object<RegisterDTO>({
    fullname : Joi.string().min(3).max(100).required(),
    username : Joi.string().min(3).max(100).required(),
    email: Joi.string().email(),
    password: Joi.string().min(4),
})