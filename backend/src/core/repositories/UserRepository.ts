import { User } from '../domains/User'

export interface IUserRepository {
    createUser(user: User): Promise<User>
    deleteUser(id: string): Promise<void>
    updateUser(user: User): Promise<User>
    findUserById(id: string): Promise<User | null>
    findUserByEmail(email: string): Promise<User | null>
}