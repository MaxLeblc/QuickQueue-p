import ProjectController from "./project.controller"
import { projectService } from "../services"
import AuthController from "./auth.controller"
import HTTPCodesController from "./HTTPCodes.controller"

const authController = new AuthController()
const projectController = new ProjectController(projectService)
const httpCodesController = new HTTPCodesController()

export { authController, projectController, httpCodesController }