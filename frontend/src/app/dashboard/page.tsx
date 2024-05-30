import { ProjectEditorProvider } from "@/components/context/projectEditorContext"
import ProjectFinder from "@/components/toolsMenu/projectFinder"
import ProjectToolsMenu from "@/components/toolsMenu/projectToolsMenu"
import Settings from "@/components/settings"
import Viewer from "@/components/viewer"
import ProjectView from "@/container/projectEditor"

export default function Dashboard() {

    return (
        <ProjectEditorProvider>
            <div className="w-screen h-screen overflow-hidden">
                <div className="flex">
                    <div className="flex justify-center min-w-80 border-r border-gray-300">
                        <ul className="w-full h-screen bg-white flex flex-col items-center">
                            <Settings />
                            <ProjectFinder />
                            {/* <ProjectToolsMenu /> */}
                            <ProjectView view="toolsMenu" />
                        </ul>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        {/* <Viewer /> */}
                        <ProjectView view="viewer" />
                    </div>
                </div>
            </div>
        </ProjectEditorProvider>
    )
}
