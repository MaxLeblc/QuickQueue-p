import { IProject } from "../../types/IProject"

export default interface IProjectRepository {
    createProject(project: IProject): Promise<IProject>
    updateProject(project: IProject): Promise<IProject>
    findProjectById(id: string): Promise<IProject | null>
    findProjectByName(name: string): Promise<IProject | null>
    deleteProject(id: string): Promise<void>
}
