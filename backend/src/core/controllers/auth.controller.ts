import { type Request, type Response } from "express"
import { UserSchema } from "../../db/schemas/userSchema"
import { IUser } from "../../types/IUser"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import HTTPCodesController from "./HTTPCodes.controller"

export default class AuthController extends HTTPCodesController {
    constructor() {
        super()
    }

}
