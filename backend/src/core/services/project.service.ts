import IProjectRepository from "../repositories/project.repository"
import { IProject } from "../../types/IProject"

export default class ProjectService {
    private projectRepository: IProjectRepository

    constructor(projectRepository: IProjectRepository) {
        this.projectRepository = projectRepository
    }

    public async getProjectById(projectId: string): Promise<IProject | null> {
        return await this.projectRepository.findProjectById(projectId)
    }

    public async getProjectByName(projectName: string): Promise<IProject | null> {
        return await this.projectRepository.findProjectByName(projectName)
    }

    public async createProject(userId: string, projectData: IProject): Promise<IProject> {
        const projectWithAuthor = {
            ...projectData,
            authorId: userId
        }
        return this.projectRepository.createProject(projectWithAuthor)
    }

    public async updateProject(projectId: string, projectData: IProject): Promise<IProject> {
        const existingProject = await this.projectRepository.findProjectById(projectId)
        if (!existingProject) {
            throw new Error("Project not found")
        }
        const updatedProject = {
            ...existingProject,
            ...projectData
        }
        return await this.projectRepository.updateProject(updatedProject)
    }

    public async deleteProject(projectId: string): Promise<void> {
        const project = await this.projectRepository.findProjectById(projectId)
        if (!project) {
            throw new Error("Project not found")
        }
        return await this.projectRepository.deleteProject(projectId)
    }
}
