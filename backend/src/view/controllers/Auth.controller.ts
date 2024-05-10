import { type Request, type Response } from "express"
// import { IUser, UserModel } from "../models/user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import HTTPCodesController from "./HTTPCodes.controller"

export class AuthController extends HTTPCodesController {
    constructor() { super() }

// 1 Register part: registers a new user in a database
async register(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body

        // Password hash by bcrypt
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)

        // Create data for UserModel
        const user = new UserModel({
            email,
            password: hashPassword
        })

        this.setCookie(res, user)

        this.created(res, {
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.createdAt
        })
    } catch (error: any) {
        console.log(error)
        this.internalServerError(res, error)
    }
}
}