import { ProjectEditorProvider } from "@/context/projectEditorContext"
import ProjectFinder from "@/components/toolsMenu/projectFinder"
import Settings from "@/container/settings"
import ProjectEditorView from "@/container/projectEditorView"

export default function Dashboard() {

    return (
        <ProjectEditorProvider>
            <div className="w-screen h-screen overflow-hidden">
                <div className="flex">
                    <div className="flex justify-center min-w-80 border-r border-gray-300">
                        <ul className="w-full h-screen bg-white flex flex-col items-center">
                            <Settings />
                            <ProjectFinder />
                            <ProjectEditorView view="toolsMenu" />
                        </ul>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <ProjectEditorView view="viewer" />
                    </div>
                </div>
            </div>
        </ProjectEditorProvider>
    )
}
