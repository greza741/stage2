import Joi from "joi";
import { CreateUserDTO } from "../../dto/user.dto";


export const createUserSchema = Joi.object<CreateUserDTO>({
    fullname : Joi.string().min(3).max(100).required(),
    username : Joi.string().min(3).max(100).required(),
    email: Joi.string().email(),
    password: Joi.string().min(4),
})