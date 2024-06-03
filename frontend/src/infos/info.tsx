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

// --------------------------------------------------------

// const ToolsMenu: React.FC = () => {
//     const context = useProjectEditorContext()
//     return <>ui tools menu here</>
// }

// const Displayer: React.FC = () => {
//     const { config } = useProjectEditorContext()

//     return <>displayer here</>
// }


// ProjectEditor.ToolsMenu = ToolsMenu;
// ProjectEditor.Displayer = Displayer;


// const Demo = () => { 
//     return (
//         <ProjectEditor>
//             <ProjectEditor.ToolsMenu />
//         </ProjectEditor>
//     )
//  }

// TODO:
// split component in files
// files list => hooks, context, ToolsMenu, Displayer
// form validation inside menu
// logic fetch and get

// --------------------------------------------------------

