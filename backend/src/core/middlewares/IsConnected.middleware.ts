import { type Response } from "express"
import jwt from "jsonwebtoken"
import HTTPCodesController from "../controllers/HTTPCodes.controller"

export class IsConnectedMiddleware extends HTTPCodesController {
    execute(req: any, res: Response, next: any): void {
        try {
            const { authToken } = req.cookies
            if (!authToken) {
                return this.unauthorized(res, { error: "No Token" })
            }

            const jwtSecret = process.env?.JWT_SECRET ?? ""

            if (!jwtSecret) {
                return this.internalServerError(res, { error: "JWT Secret is not defined" })
            }

            req.user = jwt.verify(authToken, jwtSecret)

            next()

        } catch (error: any) {
            return this.unauthorized(res, error)
        }
    }
}
