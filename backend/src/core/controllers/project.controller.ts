import HTTPCodesController from "./HTTPCodes.controller"
import ProjectService from "../services/project.service"

export default class ProjectController extends HTTPCodesController {
    private projectService: ProjectService

    constructor(projectService: ProjectService) {
        super()
        this.projectService = projectService
    }

    public async getProjectById(req: any, res: any) {
        try {
            const { projectId } = req.params
            const project = await this.projectService.getProjectById(projectId)
            this.success(res, project)
        } catch (error) {
            this.internalServerError(res, error)
        }
    }

    public async getProjectByName(req: any, res: any) {
        try {
            const { projectName } = req.params
            const project = await this.projectService.getProjectByName(projectName)
            this.success(res, project)
        } catch (error) {
            this.internalServerError(res, error)
        }
    }

    public async createProject(req: any, res: any) {
        try {
            const { userId } = req
            const project = await this.projectService.createProject(userId, req.body)
            this.created(res, project)
        } catch (error) {
            this.badRequest(res, error)
        }
    }

    public async updateProject(req: any, res: any) {
        try {
            const { projectId } = req.params
            const project = await this.projectService.updateProject(projectId, req.body)
            this.success(res, project)
        } catch (error) {
            this.badRequest(res, error)
        }
    }

    public async deleteProject(req: any, res: any) {
        try {
            const { projectId } = req.params
            await this.projectService.deleteProject(projectId)
            this.success(res, { message: "Project deleted successfully" })
        } catch (error) {
            this.badRequest(res, error)
        }
    }
}
