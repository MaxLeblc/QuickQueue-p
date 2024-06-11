import ProjectService from "./project.service"
import { projectDrizzleRepository } from "../repositories/drizzle"
import UserService from "./user.service"
import { userDrizzleRepository } from "../repositories/drizzle"

const projectService = new ProjectService(projectDrizzleRepository)
const userService = new UserService(userDrizzleRepository)

export { projectService, userService }
