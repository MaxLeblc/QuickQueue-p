import express from "express"
import { isConnectedMiddleware } from "../middlewares"

const authRouter = express.Router()

authRouter
    .get("check-token", isConnectedMiddleware.execute, (req, res) => authController.checkToken(req, res))
    .post("register", (req, res) => authController.register(req, res))
    .post("login", (req, res) => authController.login(req, res))

export default authRouter
