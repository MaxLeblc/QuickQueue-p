import ProjectFinder from "@/components/project-ui/ProjectFinder"
import ProjectToolsMenu from "@/components/project-ui/ProjectToolsMenu"
import Settings from "@/components/settings/Settings"
import Displayer from "@/components/displayer/Displayer"

export default function Dashboard() {
    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-12 grid-flow-col gap-4 h-screen">
                <div className="col-span-2 flex justify-center min-w-80 border-r border-gray-300">
                    <ul className="w-full min-h-full bg-white flex flex-col items-center">
                        <Settings />
                        <ProjectFinder />
                        <ProjectToolsMenu />
                    </ul>
                </div>
                <div className="px-4 py-9 col-start-3 col-end-4 font-bold">
                    <p>Project Name</p>
                </div>
                <div className="flex justify-center items-center col-start-5 col-end-9">
                    <Displayer />
                </div>
            </div>
        </div >
    )
}
