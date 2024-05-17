"use client"

import React, { ReactNode, createContext, useContext, useState } from "react"

interface ProjectEditorContextType {
    state: {
        backgroundColor: string;
        titleColor: string;
        textColor: string;
        placeholderColor: string;
        inputBorderColor: string;
        inputBorderWidth: string[];
        inputBorderRadius: string[];
        heroFont: string[];
        heroFontWeight: string[];
        heroText: string;
        subFont: string[];
        subFontWeight: string[];
        subText: string;
        placeholderText: string;
        buttonColor: string;
        buttonBorderColor: string;
        buttonTextColor: string;
        buttonBorderWidth: string[];
        buttonBorderRadius: string[];
        buttonFont: string[];
        buttonFontWeight: string[];
        buttonText: string;
        successMessage: string;
        showLogo: boolean;
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
        inputBorderWidth: ["0px", "1px", "2px", "4px", "8px"],
        inputBorderRadius: ["None", "Small", "Medium", "Large", "XL", "Full"],
        heroFont: ["Inter", "Roboto", "Railway", "Rubik", "Lora"],
        heroFontWeight: ["thin", "Normal", "Medium", "Bold", "Black"],
        heroText: "Signup to our waitlist",
        subFont: ["Inter", "Roboto", "Railway", "Rubik", "Lora"],
        subFontWeight: ["thin", "Normal", "Medium", "Bold", "Black"],
        subText: "Get exclusive news, latest updates, and exceptional discounts. Join the list!",
        placeholderText: "Add your email",
        buttonColor: "#000000",
        buttonBorderColor: "#000000",
        buttonTextColor: "#000000",
        buttonBorderWidth: ["0px", "1px", "2px", "4px", "8px"],
        buttonBorderRadius: ["None", "Small", "Medium", "Large", "XL", "Full"],
        buttonFont: ["Inter", "Roboto", "Railway", "Rubik", "Lora"],
        buttonFontWeight: ["thin", "Normal", "Medium", "Bold", "Black"],
        buttonText: "Button",
        successMessage: "You're on the waitlist!",
        showLogo: true,
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