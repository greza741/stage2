import express, { Request, Response } from "express"

export const routerV2 = express.Router()

routerV2.get("/suggestion", (req : Request, res: Response) => {
    res.json({
        data: [],
    })
})