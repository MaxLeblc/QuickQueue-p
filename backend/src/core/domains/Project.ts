import { v4 as uuid } from 'uuid'
import { z } from "zod"

const projectSchema = z.object({
    id: z.string(),
    name: z.string().min(3).max(20),
    style: z.string(),
    text: z.string().min(8).max(40),
    placeholder: z.string().email(),
    logo: z.string().url().optional(),
    tracking: z.string().url().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

type IProjectProps = z.infer<typeof projectSchema>

export class Project {
    private props: IProjectProps

    constructor(props: IProjectProps) {
        this.props = props
    }

    get id(): string {
        return this.props.id as string
    }

    get name(): string {
        return this.props.name
    }

    get style(): string {
        return this.props.style
    }

    get text(): string {
        return this.props.text
    }

    get placeholder(): string {
        return this.props.placeholder
    }

    get logo(): string | undefined {
        return this.props.logo
    }

    get tracking(): string | undefined {
        return this.props.tracking
    }

    get createdAt(): Date | undefined {
        return this.props.createdAt
    }

    get updatedAt(): Date | undefined {
        return this.props.updatedAt
    }

    updateName(newName: string) {
        const schema = z.string().min(3).max(20)
        const validatedData = schema.parse(newName)
        this.props.name = validatedData;
    }

    updateStyle(newStyle: string) {
        const schema = z.string()
        const validatedData = schema.parse(newStyle)
        this.props.style = validatedData;
    }

    updateText(newText: string) {
        const schema = z.string().min(8).max(40)
        const validatedData = schema.parse(newText)
        this.props.text = validatedData;
    }

    updatePlaceholder(newPlaceholder: string) {
        const schema = z.string().email()
        const validatedData = schema.parse(newPlaceholder)
        this.props.placeholder = validatedData;
    }

    updateLogo(newLogo: string) {
        const schema = z.string().url()
        const validatedData = schema.parse(newLogo)
        this.props.logo = validatedData;
    }

    static checkSelfProps(props: IProjectProps): void {
        const schema = z.object({
            name: z.string().min(3).max(20),
            text: z.string().min(8).max(40),
        })

        schema.parse(props)
    }

    static createProject(props: IProjectProps, id?: string) {

        try {
            Project.checkSelfProps(props)

            if (!id) {
                id = uuid()
            }
        } catch (error) {
            throw error
        }

        const {
            name,
            style,
            text,
            placeholder,
            logo
        } = props

        return new Project({
            id: uuid(),
            name,
            style,
            text,
            placeholder,
            logo,
            tracking: undefined,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }
}