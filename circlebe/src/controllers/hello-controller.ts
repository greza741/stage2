import { Request, Response } from "express";
import { SayHello, SayHello2 } from "../services/hello-service";
import { CustomError, CustomErrorCode } from "../types/error";


export function HelloController(req: Request, res: Response) {
    const hello = SayHello();
    const hello2 = SayHello2();
    throw {
        status: 404,
        message: "User not found!",
        code: CustomErrorCode.USER_NOT_EXISTS
    } as CustomError
    res.send(`${hello} ${hello2}`)
}