"use client"

import { useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { useProjectEditorContext } from "../projectEditor"

export default function Viewer() {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFile = () => {
        inputRef.current?.click()
    }

    const { state } = useProjectEditorContext()
    // const hexColor = state.backgroundColor.replace(/[^#0-9a-fA-F]/g, '')
    const hexColor = parseInt(state.backgroundColor)

    return (
        <div className={`flex flex-col justify-center items-center w-lg h-2/5 p-10 mr-auto bg-[${hexColor}]`} style={{ background: state.backgroundColor }} >
            {state.showLogo === true && (
                <div className="cursor-pointer" onClick={handleFile} >
                    <Avatar className={cn("w-20 h-20 mb-8")} >
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                        <Input id="picture" type="file" ref={inputRef} className="hidden" />
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
    )
}
