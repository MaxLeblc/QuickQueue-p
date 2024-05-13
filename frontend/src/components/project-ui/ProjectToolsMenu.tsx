"use client"

import { useState } from "react"
import ProjectToolsInput from "@/components/project-ui/ProjectToolsInput"
import ProjectToolsButton from "@/components/project-ui/ProjectToolsButton"
import ProjectToolsPresets from "@/components/project-ui/ProjectToolsPresets"

export default function ProjectToolsMenu() {
    const [selectedTool, setSelectedTool] = useState<string>("Input")
    console.log("🚀 ~ ProjectToolsMenu ~ selectedTool:", selectedTool)

    const renderTool = () => {
        switch (selectedTool) {
            case "Input":
                return <ProjectToolsInput />
            case "Button":
                return <ProjectToolsButton />
            case "Presets":
                return <ProjectToolsPresets />
            default:
                return <ProjectToolsInput />
        }
    }

    return (
        <div className="w-full px-10 py-4">
            <div className="flex justify-center gap-3 px-4 py-6">
                <div className="flex gap-4 py-1 px-4 bg-zinc-200 rounded font-medium text-sm">
                    {[
                        ["Input"],
                        ["Button"],
                        ["Presets"]
                    ].map(([title]) => (
                        <button
                            key={title}
                            className={`rounded p-2 ${selectedTool === title ? 'bg-zinc-300' : ''}`}
                            onClick={() => setSelectedTool(title)}
                        >
                            {title}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex justify-center py-6">
                {renderTool()}
            </div>
        </div>
    )
}
