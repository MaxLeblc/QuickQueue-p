import HTTPCodesController from "./HTTPCodes.controller"
import UserService from "../services/user.service"
import { IUser } from "../../types/IUser"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default class UserController extends HTTPCodesController {
    private userService: UserService

    constructor(userService: UserService) {
        super()
        this.userService = userService
    }

    static setCookie(res: any, user: IUser) {
        const jwtSecret = process.env.JWT_SECRET

        if (!jwtSecret) {
            throw new Error("JWT Secret is not defined")
        }

        const token = jwt.sign({
            userId: user.id,
        }, jwtSecret, {
            expiresIn: "1w"
        })

        res.cookie("authToken", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 604800000
        })
    }

    public async getUserById(req: any, res: any) {
        try {
            const { userId } = req.params
            const user = await this.userService.getUserById(userId)
            this.success(res, user)
        } catch (error) {
            this.internalServerError(res, error)
        }
    }

    public async getUserByEmail(req: any, res: any) {
        try {
            const { userEmail } = req.params
            const user = await this.userService.getUserByEmail(userEmail)
            this.success(res, user)
        } catch (error) {
            this.internalServerError(res, error)
        }
    }

    public async registerUser(req: any, res: any): Promise<void> {
        try {
            const { userEmail, userPassword } = req.body
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(userPassword, salt)
            const user: IUser = await this.userService.createUser({ userEmail, password: hash })

            UserController.setCookie(res, user)

            this.created(res, {
                message: `User ${user.email} created successfully`,
                createdAt: user.createdAt,
            })
        } catch (error: any) {
            this.internalServerError(res, error)
        }
    }

    public async loginUser(req: any, res: any): Promise<any> {
        try {
            const { userEmail, userPassword } = req.body

            if (!userEmail || !userPassword) {
                return this.badRequest(res, { error: "Email and password are required" })
            }

            const user = await this.userService.getUserByEmail(userEmail)

            if (!user) {
                return this.badRequest(res, { error: "User or Password are wrong" })
            }

            const isPasswordValid = bcrypt.compareSync(userPassword, user.password)

            if (!isPasswordValid) {
                return this.badRequest(res, { error: "User or Password are wrong" })
            }

            UserController.setCookie(res, user)

            this.created(res, {
                message: `User ${user.email}logged in successfully`
            })

        } catch (error: any) {
            this.internalServerError(res, error)
        }
    }

    public async updateUser(req: any, res: any) {
        try {
            await this.userService.updateUser(req.body)
            this.success(res, {
                message: `User updated successfully`
            })
        } catch (error) {
            this.badRequest(res, error)
        }
    }

    public async deleteUser(req: any, res: any) {
        try {
            const { userId } = req.params
            await this.userService.deleteUser(userId)
            this.success(res, {
                message: "User deleted successfully"
            })
        } catch (error) {
            this.badRequest(res, error)
        }
    }
}
