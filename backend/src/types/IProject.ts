import { IUser } from "./IUser"
import { IConfig } from "./IConfig"

export interface IProject {
    id: number
    name: string
    tracking: string
    createdAt: string
    updatedAt: string
    userId: IUser["id"]
    config: IConfig
}