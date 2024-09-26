import { Request, Response } from "express";
import authService from "../services/auth-service";
import userService from "../services/user-service";
import { loginSchema, registerSchema } from "../utils/schemas/auth.schema";
import { LoginDTO } from "../dto/auth.dto";


class AuthController {
    async login(req: Request, res: Response) {
         /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/LoginDTO"
                    }  
                }
            }
        } 
    */
        try {
            const value = await loginSchema.validateAsync(req.body)
            const user = await authService.login(value)
           res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async register(req: Request, res: Response) {
           /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/RegisterDTO"
                    }  
                }
            }
        } 
    */
        try {
           const value = await registerSchema.validateAsync(req.body)
            await authService.register(value)
            const user = await authService.login(value)
           res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async check(req: Request, res: Response) {
        try {
           const user = (req as any).user
           res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    
}

export default new AuthController()