import express, { Request, Response } from "express"
import userController2 from "../controllers/suggestion-controller2"

export const routerV2 = express.Router()

routerV2.get("/suggestion2", userController2.find)

routerV2.get("/suggestion", (req : Request, res: Response) => {
    res.json({
        data: [],
    })
})