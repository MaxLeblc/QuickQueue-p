"use client"

import { useRef, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { useProjectEditorContext } from "../context/projectEditorContext"

export default function Viewer() {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFile = () => {
        inputRef.current?.click()
    }

    // const [logo, setLogo] = useState<string>("https://github.com/shadcn.png")

    const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                // setLogo(reader.result as string)
                setState(prevState => ({ ...prevState, logo: reader.result as string }))
            }
            reader.readAsDataURL(file)
        }
    }

    const { state, setState } = useProjectEditorContext()
    // const hexColor = state.backgroundColor.replace(/[^#0-9a-fA-F]/g, '')
    // const hexColor = parseInt(state.backgroundColor)
    
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="px-4 py-9 w-full mb-auto">
                <Input className="resize-none border-0 text-xl font-bold text-center" value={state.projectName} onChange={(e) => setState(prevState => ({ ...prevState, projectName: e.target.value }))} />
            </div>
            <div className={"flex flex-col justify-center items-center w-lg h-lg p-10 min-w-[480px] mx-10 mb-auto"} style={{ backgroundColor: state.backgroundColor }}>
                {state.showLogo === true && (
                    <div className="cursor-pointer" onClick={handleFile} >
                        <Avatar className={cn("w-20 h-20 mb-8")} >
                            <AvatarImage src={state.logo} className={cn("object-cover")} />
                            <Input id="picture" type="file" ref={inputRef} className="hidden" onChange={handleLogo} />
                        </Avatar>
                    </div>
                )}
                <h1
                    className="font-bold text-4xl"
                    style={{
                        color: state.titleColor,
                        fontFamily: state.heroFont,
                        fontWeight: state.heroFontWeight
                    }}
                >
                    {state.heroText}
                </h1>
                <p
                    className="text-wrap text-center py-6"
                    style={{
                        color: state.textColor,
                        fontFamily: state.subFont,
                        fontWeight: state.subFontWeight
                    }}
                >
                    {state.subText}
                </p>

                <div className="flex items-center">
                    <Input
                        className={cn("mr-6")}
                        style={{
                            background: state.placeholderColor,
                            borderColor: state.inputBorderColor,
                            borderWidth: state.inputBorderWidth,
                            borderRadius: state.inputBorderRadius
                        }}
                        placeholder={state.placeholderText}
                    />
                    <Button
                        style={{
                            background: state.buttonColor,
                            borderColor: state.buttonBorderColor,
                            borderWidth: state.buttonBorderWidth,
                            borderRadius: state.buttonBorderRadius,
                            color: state.buttonTextColor,
                            fontFamily: state.buttonFont,
                            fontWeight: state.buttonFontWeight
                        }}
                        onClick={() => toast.success(state.successMessage)}
                    >
                        {state.buttonText}
                    </Button>
                </div>
            </div>
        </div>
    )
}
