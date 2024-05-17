"use client"

import React, { ReactNode, createContext, useContext, useState } from "react"

interface ProjectEditorContextType {
    state: {
        backgroundColor: string;
        titleColor: string;
        textColor: string;
        placeholderColor: string;
        inputBorderColor: string;
        heroText: string;
        subText: string;
        placeholderText: string;
        buttonColor: string;
        buttonBorderColor: string;
        buttonTextColor: string;
        buttonText: string;
        successMessage: string;
    };
    setState: React.Dispatch<React.SetStateAction<ProjectEditorContextType["state"]>>;
}

const ProjectEditorContext = createContext<ProjectEditorContextType | undefined>(undefined)

export const useProjectEditorContext = () => {
    const context = useContext(ProjectEditorContext)
    if (!context) {
        throw new Error("useProjectEditorContext must be used within a ProjectEditor")
    }
    return context;
}

interface ProjectEditorProps {
    children: ReactNode;
}

export const ProjectEditorProvider = ({ children }: ProjectEditorProps) => {
    const [state, setState] = useState<ProjectEditorContextType["state"]>({
        backgroundColor: "#000000",
        titleColor: "#000000",
        textColor: "#000000",
        placeholderColor: "#000000",
        inputBorderColor: "#000000",
        heroText: "Signup to our waitlist",
        subText: "Get exclusive news, latest updates, and exceptional discounts. Join the list!",
        placeholderText: "Add your email",
        buttonColor: "#000000",
        buttonBorderColor: "#000000",
        buttonTextColor: "#000000",
        buttonText: "Button",
        successMessage: "You're on the waitlist!"
    })

    // fetch and save project here

    return (
        <ProjectEditorContext.Provider value={{
            // config,
            // save,
            state,
            setState
        }}>
            {children}
        </ProjectEditorContext.Provider>
    )
}


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