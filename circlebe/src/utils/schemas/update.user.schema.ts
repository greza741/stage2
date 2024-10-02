import Joi from "joi";
import { UpdateUserDTO } from "../../dto/user.dto";


export const updateUserSchema = Joi.object<UpdateUserDTO>({
    fullname : Joi.string(),
    username : Joi.string(),
    bio : Joi.string(),
    profile: Joi.string(),
    bgImage: Joi.string()
})