import express from "express"
import userRouter from "./user.router"
import projectRouter from "./project.router"
import { isConnectedMiddleware } from "../middlewares"

const appRouter = express.Router()

appRouter.use("/auth", userRouter)
appRouter.use("/dashboard", isConnectedMiddleware.execute, projectRouter)

export default appRouter
