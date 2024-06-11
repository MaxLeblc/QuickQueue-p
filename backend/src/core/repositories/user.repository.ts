import { IUser } from "../../types/IUser"

export interface IUserRepository {
    createUser(user: IUser): Promise<IUser>
    deleteUser(id: string): Promise<void>
    updateUser(user: IUser): Promise<IUser>
    findUserById(id: string): Promise<IUser | null>
    findUserByEmail(email: string): Promise<IUser | null>
}