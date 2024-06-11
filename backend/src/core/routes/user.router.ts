import express from "express"
import { userController } from "../controllers"
import { isConnectedMiddleware } from "../middlewares"

const authRouter = express.Router()

export default authRouter
    .get("check-token", isConnectedMiddleware.execute, (req, res) => userController.checkToken(req, res))
    .post("register", (req, res) => userController.register(req, res))
    .post("login", (req, res) => userController.login(req, res))
