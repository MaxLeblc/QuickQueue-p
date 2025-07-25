import db from '../../../db/drizzle'
import { projectSchema } from '../../../db/schemas'
import IProjectRepository from '../project.repository'
import { IProject } from '../../../types/IProject'

export default class ProjectDrizzleRepository implements IProjectRepository {
    public async findProjectById(projectId: string): Promise<any | null> {
        return await db
            .select()
            .from(projectSchema)
            .where({ id: projectId })
            .execute()
    }

    public async findProjectByName(projectName: string): Promise<any> {
        return await db
            .select()
            .from(projectSchema)
            .where({ name: projectName })
            .execute()
    }

    public async createProject(projectData: IProject): Promise<any> {
        return await db
            .insert()
            .into(projectSchema)
            .values(projectData)
            .returning("*")
            .execute()
    }

    public async updateProject(projectData: IProject): Promise<any> {
        const { id, ...updateData } = projectData
        return await db
            .update(projectSchema)
            .set(updateData)
            .where({ id: id })
            .execute()
    }

    public async deleteProject(projectId: string): Promise<void> {
        return await db
            .delete()
            .from(projectSchema)
            .where({ id: projectId })
            .execute()
    }
}
