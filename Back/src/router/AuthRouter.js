import { Router } from "express";
import {  loginController, registerController } from "../controller/AuthController.js";

export const AuthRouter = Router()
AuthRouter.post('/login' , loginController)
AuthRouter.post('/register', registerController )