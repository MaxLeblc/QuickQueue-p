import express from "express"
import authRouter from "./auth.router"
import projectRouter from "./project.router"
import { isConnectedMiddleware } from "../middlewares"

const appRouter = express.Router()

appRouter.use("/auth", authRouter)
appRouter.use("/dashboard", isConnectedMiddleware.execute, projectRouter)

export default appRouter
