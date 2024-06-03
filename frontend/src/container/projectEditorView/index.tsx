import ProjectToolsMenu from "@/components/toolsMenu/projectToolsMenu"
import Viewer from "@/container/viewer"

type ViewType = "toolsMenu" | "viewer"

interface ProjectViewProps {
    view: ViewType
}

export default function ProjectEditorView({ view }: ProjectViewProps) {
    switch (view) {
        case "toolsMenu":
            return <ProjectToolsMenu />
        case "viewer":
            return <Viewer />
        default:
            return null
    }
}
