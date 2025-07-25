"use client"

import React, { ReactNode, createContext, useContext, useReducer } from "react"
import { ProjectEditorContextType } from "@/types/ProjectEditorContextType"
import { saveProjectData } from "@/api/saveProjectData"

const initialState = {
    projectName: "Project Name",
    backgroundColor: "#E3E3E3",
    titleColor: "#000000",
    textColor: "#000000",
    placeholderColor: "#ffffff",
    inputBorderColor: "#000000",
    inputBorderWidth: "1px",
    inputBorderRadius: "0",
    heroFont: "inter",
    heroFontWeight: "400",
    heroText: "Signup to our waitlist",
    subFont: "inter",
    subFontWeight: "400",
    subText: "Get exclusive news, latest updates, and exceptional discounts. Join the list!",
    placeholderText: "Add your email",
    buttonColor: "#000000",
    buttonBorderColor: "#000000",
    buttonTextColor: "#ffffff",
    buttonBorderWidth: "1px",
    buttonBorderRadius: "O",
    buttonFont: "inter",
    buttonFontWeight: "400",
    buttonText: "Submit",
    successMessage: "You're on the waitlist!",
    logo: "https://github.com/shadcn.png",
    showLogo: true,
}
const ProjectEditorContext = createContext<ProjectEditorContextType | undefined>(undefined)

export const useProjectEditorContext = () => {
    const context = useContext(ProjectEditorContext)
    if (!context) {
        throw new Error("useProjectEditorContext must be used within a ProjectEditor")
    }
    return context
}

function reducer(state: ProjectEditorContextType["config"], action: { type: string, key: string, value: any }) {
    switch (action.type) {
        case "update":
            return { ...state, [action.key]: action.value }
        default:
            throw new Error()
    }
}

interface ProjectEditorProps {
    children: ReactNode
}

export const ProjectEditorProvider = ({ children }: ProjectEditorProps) => {
    const [config, dispatch] = useReducer(reducer, initialState)

    const save = async (key: string, value: any) => {
        try {
            dispatch({ type: "update", key, value })
            await saveProjectData({ ...config, [key]: value })
        } catch (error) {
            console.error("Failed to save project data", error)
        }
    }

    return (
        <ProjectEditorContext.Provider value={{ config, save }}>
            {children}
        </ProjectEditorContext.Provider>
    )
}
