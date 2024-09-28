import Joi from "joi";
import { UpdateUserDTO } from "../../dto/user.dto";


export const updateUserSchema = Joi.object<UpdateUserDTO>({
    fullname : Joi.string().min(3).max(100).required(),
    username : Joi.string().min(3).max(100).required(),
    bio : Joi.string().min(3).max(100),
    // password: Joi.string().min(4),
})