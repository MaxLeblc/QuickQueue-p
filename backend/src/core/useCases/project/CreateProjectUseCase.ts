import { Project } from "../../domains/Project"
import { IProjectRepository } from "../../repositories/ProjectRepository"

export class CreateProjectUseCase {
    private projectRepository: IProjectRepository

    constructor(projectRepository: IProjectRepository) { 
        this.projectRepository = projectRepository
    }

    async execute(name: string, style: string, text: string, placeholder: string, logo: URL): Promise<void> {
        const newProject = Project.createProject(name, style, text, placeholder, logo)
        await this.projectRepository.createProject(newProject)
    }
}