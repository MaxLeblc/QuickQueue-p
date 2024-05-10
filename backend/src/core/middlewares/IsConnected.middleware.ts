import { type Response } from "express"
import jwt from "jsonwebtoken"

export class IsConnectedMiddleware {
    execute(req: any, res: Response, next: any): void {
        try {
            const { authToken } = req.cookies
            if (!authToken) {
                // Error 401(unauthorized)
                res.status(401).send({ error: "No Token" })
                return
            }

            const jwtSecret = process.env?.JWT_SECRET ?? ""

            if (!jwtSecret) {
                res.status(500).send({ error: "JWT Secret is not defined" })
                return
            }

            req.user = jwt.verify(authToken, jwtSecret)

            next()

        } catch (error: any) {
            console.log(error)
            res.status(401).send({ error: error.message })
        }
    }
}