import ProjectDrizzleRepository from "./projectDrizzle.repository"
import { UserDrizzleRepository } from "./userDrizzle.repository"

const projectDrizzleRepository = new ProjectDrizzleRepository()
const userDrizzleRepository = new UserDrizzleRepository()

export { projectDrizzleRepository, userDrizzleRepository }