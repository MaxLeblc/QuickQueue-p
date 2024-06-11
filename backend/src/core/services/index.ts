import ProjectService from "./project.service"
import { projectDrizzleRepository } from "../repositories/drizzle"

const projectService = new ProjectService(projectDrizzleRepository)

export { projectService }