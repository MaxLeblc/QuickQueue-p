import { v4 as uuid } from 'uuid'
import { z } from "zod"

const userSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    projects: z.array(z.string()).optional(),
    plan: z.boolean().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

type IUserProps = z.infer<typeof userSchema> 

export class User {
    private props: IUserProps

    constructor(props: IUserProps) {
        this.props = props
    }

    get id(): string {
        return this.props.id as string
    }

    get email(): string {
        return this.props.email
    }

    get password(): string {
        return this.props.password
    }

    get projects(): string[] {
        return this.props.projects as string[]
    }

    get plan(): boolean {
        return this.props.plan as boolean
    }

    get createdAt(): Date | undefined {
        return this.props.createdAt
    }

    get updatedAt(): Date | undefined {
        return this.props.updatedAt
    }

    updateEmail(newEmail: string) {
        const schema = z.string().email()
        const validateData = schema.parse(newEmail)
        this.props.email = validateData
    }

    updatePassword(newPassword: string) {
        const schema = z.string().min(6)
        const validateData = schema.parse(newPassword)
        this.props.password = validateData
    }

    updatePlan(newPlan: boolean) {
        const schema = z.boolean()
        const validateData = schema.parse(newPlan)
        this.props.plan = validateData
    }
}

export class UserFactory {
    static createUser(email: string, password: string): User {
        return new User({
            id: uuid(),
            email,
            password,
            projects: [],
            plan: false,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }
}