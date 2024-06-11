import IUserRepository from "../repositories/user.repository"
import { IUser } from "../../types/IUser"

export default class UserService {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    public async getUserById(userId: string): Promise<IUser | null> {
        return await this.userRepository.findUserById(userId)
    }

    public async getUserByEmail(userEmail: string): Promise<IUser | null> {
        return await this.userRepository.findUserByEmail(userEmail)
    }

    public async createUser(userData: any): Promise<IUser> {
        const existingUser = await this.userRepository.findUserByEmail(userData.email)
        if (existingUser) {
            throw new Error("User and/or Password are wrong")
        }
        return await this.userRepository.createUser(userData)
    }

    public async updateUser(userData: any): Promise<IUser> {
        const existingUser = await this.userRepository.findUserById(userData.id)
        if (!existingUser) {
            throw new Error("Something went wrong")
        }
        const updatedUser = {
            ...existingUser,
            ...userData
        }
        return await this.userRepository.updateUser(updatedUser)
    }

    public async deleteUser(userId: string): Promise<void> {
        const user = await this.userRepository.findUserById(userId)
        if (!user) {
            throw new Error("Something went wrong")
        }
        return await this.userRepository.deleteUser(userId)
    }
}
