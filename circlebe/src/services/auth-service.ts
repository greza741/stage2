import { PrismaClient, User } from "@prisma/client";
import { LoginDTO, RegisterDTO } from "../dto/auth.dto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { CustomError, CustomErrorCode } from "../types/error";

const prisma = new PrismaClient()

class AuthService {
    async login(data : LoginDTO): Promise< {user: Omit<User, "password">; token: String}> {
        const user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })
        if(!user) {
            throw {
                status: 404,                
                message: "User not found!",
                code: CustomErrorCode.USER_NOT_EXISTS
            } as CustomError
        }
        const isValidPassword = await bcrypt.compare(data.password, user.password)

        if(!isValidPassword) {
            throw {
                status: 404,                
                message: "Email / password is wrong!",
                code: CustomErrorCode.USER_NOT_EXISTS
            } as CustomError
        }

        const {password, ...userToSign} = user

        const secretKey = process.env.JWT_SECRET as string

        const token = jwt.sign(userToSign, secretKey)

        return {
            user: userToSign,
            token: token
        }
    } 

    async register(data : RegisterDTO): Promise<User | null> {
        const salt = 10
        const hashedPassword = await bcrypt.hash(data.password, salt)

        return await prisma.user.create({
            data :{
            ...data,
            password: hashedPassword,
        }})
    }
   
}

export default new AuthService()
