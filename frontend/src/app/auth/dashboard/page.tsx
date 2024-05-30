import { ProjectEditorProvider } from "@/components/context/projectEditorContext"
import ProjectFinder from "@/components/toolsMenu/projectFinder"
import ProjectToolsMenu from "@/components/toolsMenu/projectToolsMenu"
import Settings from "@/components/settings"
import Viewer from "@/components/viewer"
import ProjectView from "./[projectId]/page"

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

// export default function Demo() {
//     return 
//         <ProjectEditor initialConfig onSave={hanleSaveAsync}>
//             <ProjectEditor.ToolsMenu />
//             <div>
//                 <ProjectEditor.Displayer />
//             </div>
//         </ProjectEditor>
// }

// QueueDisplayer props: config

// AUTH REQUIRED
// dashboard/:projectId/edit
// dashboard/:projectId/stats
// dashboard/settings


// AUTH NOT REQUIRED
// 1- fetch projectConfig by id
// 2- Display config with QueueDisplayer props: config
// queue/:projectId
// client can subscribe with Service


// FOR FETCHING, SWR (getProjectById, GetUserSettings, getUserSettings)
// ALT customHook that take a service as parameter + service using axios or fetch
// TO MUTATE THE DATA (saveProjectConfig, CreateBlankProject, saveUserSettings)
// UserService
// ProjectService (ProjectService.save())


// class ProjectService {
//     async save() {

//     }
// }

// const { isLoading, result, isError } = useService(ProjectService.save)