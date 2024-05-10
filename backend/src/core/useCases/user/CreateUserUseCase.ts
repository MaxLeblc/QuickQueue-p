import { UserFactory } from '../../domains/User'
import { IUserRepository } from '../../repositories/UserRepository'

export class CreateUserUseCase {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    async validate(email: string): Promise<void> {
        const user = await this.userRepository.findUserByEmail(email)
        if (user) {
            throw new Error('User or Email already exists')
        }
    }

    async execute(email: string, password: string): Promise<void> {
        const newUser = UserFactory.createUser(email, password)
        await this.userRepository.createUser(newUser)
    }
}