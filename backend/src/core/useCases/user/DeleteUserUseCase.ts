import { IUserRepository } from '../../repositories/UserRepository'

export class DeleteUserUseCase {
    private userRepository: IUserRepository

    constructor( userRepository: IUserRepository) {
        this.userRepository = userRepository
     }

    async execute(userId: string): Promise<void> {
        await this.userRepository.deleteUser(userId)
    }
}