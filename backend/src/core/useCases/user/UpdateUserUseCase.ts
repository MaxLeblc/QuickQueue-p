import { User } from '../../domains/User'
import { IUserRepository } from '../../repositories/user.repository'


export class UpdateUserUseCase {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    async execute(userId: string, userData: Partial<User>): Promise<void> {
        const user = await this.userRepository.findUserById(userId)

        if (!user) {
            throw new Error('User not found')
        }
        if (userData.email !== undefined) {
            user.updateEmail(userData.email);
        }
        if (userData.password !== undefined) {
            user.updatePassword(userData.password);
        }
        if (userData.plan !== undefined) {
            user.updatePlan(userData.plan);
        }

        await this.userRepository.updateUser(user)
    }
}   