import express from "express";
import { UploadFile } from "../middlewares/upload-file";
import { HelloController } from "../controllers/hello-controller";
import userController from "../controllers/user-controller";
import authController from "../controllers/auth-controller";
import { authentication } from "../middlewares/authentication";

export const routeV1 = express.Router()

routeV1.get("/", UploadFile, HelloController)
routeV1.get("/users", userController.find)
routeV1.get("/users/:id", userController.findById)
routeV1.get("/users/email/:email", userController.findByEmail)
routeV1.post("/users", userController.create)
routeV1.patch("/users", userController.update)
routeV1.delete("/users/:id", userController.delete)

// routeV1.get("/profile", authentication, profileController)

routeV1.post("/auth/login", authController.login)
routeV1.post("/auth/register", authController.register)
routeV1.post("/auth/check", authentication, authController.check)