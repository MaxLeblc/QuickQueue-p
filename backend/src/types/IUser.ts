import { IProject } from "./IProject"

export interface IUser {
    id: number
    email: string
    password: string
    projects: IProject[]
    plan: boolean
    done: boolean
    createdAt: string
    updatedAt: string
}