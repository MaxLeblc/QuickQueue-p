import { Project } from "../domains/Project"

export interface IProjectRepository {
    createProject(project: Project): Promise<Project>
    updateProject(project: Project): Promise<Project>
    findProjectById(id: string): Promise<Project | null>
    findProjectByName(name: string): Promise<Project | null>
}