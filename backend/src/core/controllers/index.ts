import UserController from "./user.controller"
import { userService } from "../services"
import ProjectController from "./project.controller"
import { projectService } from "../services"
import HTTPCodesController from "./HTTPCodes.controller"

const userController = new UserController(userService)
const projectController = new ProjectController(projectService)
const httpCodesController = new HTTPCodesController()

export { userController, projectController, httpCodesController }
