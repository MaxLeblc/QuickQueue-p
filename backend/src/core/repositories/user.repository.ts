import { IUser } from "../../types/IUser"

export default interface IUserRepository {
    createUser(user: IUser): Promise<IUser>
    updateUser(user: IUser): Promise<IUser>
    findUserById(id: string): Promise<IUser | null>
    findUserByEmail(email: string): Promise<IUser | null>
    deleteUser(id: string): Promise<void>
}
