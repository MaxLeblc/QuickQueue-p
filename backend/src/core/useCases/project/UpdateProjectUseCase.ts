import { Project } from "../../domains/Project"
import { IProjectRepository } from "../../repositories/ProjectRepository"

export class UpdateProjectUseCase {
    private projectRepository: IProjectRepository

    constructor(projectRepository: IProjectRepository) {
        this.projectRepository = projectRepository
    }

    async execute(projectId: string, projectData: Partial<Project>): Promise<void> {
        const project = await this.projectRepository.findProjectById(projectId)

        if (!project) {
            throw new Error('Project not found')
        }
        if (projectData.name !== undefined) {
            project.updateName(projectData.name)
        }
        if (projectData.style !== undefined) {
            project.updateStyle(projectData.style)
        }
        if (projectData.text !== undefined) {
            project.updateText(projectData.text)
        }
        if (projectData.placeholder !== undefined) {
            project.updatePlaceholder(projectData.placeholder)
        }
        if (projectData.logo !== undefined) {
            project.updateLogo(projectData.logo)
        }

        await this.projectRepository.updateProject(project)
    }
}