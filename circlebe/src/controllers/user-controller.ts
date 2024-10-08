import { Request, Response } from "express";
import userService from "../services/user-service";
import { createUserSchema } from "../utils/schemas/user.schema";
import { CustomError, CustomErrorCode } from "../types/error";
import { updateUserSchema } from "../utils/schemas/update.user.schema";
import { extend } from "joi";
import cloudinaryService from "../services/cloudinary-service";
interface RequestWithUser extends Request{
    user?: any
}

class UserController {
    async find(req: Request, res: Response) {
        try {
            const users = await userService.getAllUsers()
            res.json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async findById(req: RequestWithUser, res: Response) {
        try {
            const id = req.user.id
    
            const users = await userService.getUserById(id)
            res.json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    } 
    
    async findByEmail(req: Request, res: Response) {
        try{
            const {email} = req.params
    
            const users = await userService.getUserByEmail(email)
            res.json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async create(req: Request, res: Response) {
       try {
        const value = await createUserSchema.validateAsync(req.body)

           const users = await userService.createUser(value)
           res.json(users)
       } catch (error) {
        res.status(500).json(error)
    }
    }

    async update(req: Request, res: Response) {
        /*  #swagger.requestBody = {
            required: true,
            content: {
                "multipart/form-data": {
                    schema: {
                        $ref: "#/components/schemas/UpdateUserDTO"
                    }  
                }
            }
        } 
    */
        try {
            const userId = await (req as any).user.id;
            const updateData = req.body; 
            // const profile = await  cloudinaryService.uploadSingle(req.file as Express.Multer.File)
            // const bgImage = await  cloudinaryService.uploadSingle(req.file as Express.Multer.File)

            // const body = {
            //     ...req.body,
            //     userId,
                // profile: profile.secure_url,
                // bgImage: bgImage.secure_url
            //   }
              
            //   const value = await updateUserSchema.validateAsync(body);
        
            const users = await userService.updateUser(updateData, userId);
            res.json(users);
          } catch (error) {
            res.status(500).json({ message: "Internal Server Error", error });
          }
        }

    async delete(req: Request, res: Response) {
        try {
           res.clearCookie('token')
           return res.json()
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new UserController()