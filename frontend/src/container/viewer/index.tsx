"use client"

import { useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { useProjectEditorContext } from "../../context/projectEditorContext"

export default function Viewer() {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFile = () => {
        inputRef.current?.click()
    }

    const { config, save } = useProjectEditorContext()

    const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                save("logo", reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="px-4 py-9 w-full mb-auto">
                <Input className="resize-none border-0 text-xl font-bold text-center" value={config.projectName} onChange={(e) => save("projectName", e.target.value)} />
            </div>
            <div className={"flex flex-col justify-center items-center w-lg h-lg p-10 min-w-[480px] mx-10 mb-auto"} style={{ backgroundColor: config.backgroundColor }}>
                {config.showLogo === true && (
                    <div className="cursor-pointer" onClick={handleFile} >
                        <Avatar className={cn("w-20 h-20 mb-8")} >
                            <AvatarImage src={config.logo} className={cn("object-cover")} />
                            <Input id="picture" type="file" ref={inputRef} className="hidden" onChange={handleLogo} />
                        </Avatar>
                    </div>
                )}
                <h1
                    className="font-bold text-4xl"
                    style={{
                        color: config.titleColor,
                        fontFamily: config.heroFont,
                        fontWeight: config.heroFontWeight
                    }}
                >
                    {config.heroText}
                </h1>
                <p
                    className="text-wrap text-center py-6"
                    style={{
                        color: config.textColor,
                        fontFamily: config.subFont,
                        fontWeight: config.subFontWeight
                    }}
                >
                    {config.subText}
                </p>
                <div className="flex items-center">
                    <Input
                        className={cn("mr-6")}
                        style={{
                            background: config.placeholderColor,
                            borderColor: config.inputBorderColor,
                            borderWidth: config.inputBorderWidth,
                            borderRadius: config.inputBorderRadius
                        }}
                        placeholder={config.placeholderText}
                    />
                    <Button
                        style={{
                            background: config.buttonColor,
                            borderColor: config.buttonBorderColor,
                            borderWidth: config.buttonBorderWidth,
                            borderRadius: config.buttonBorderRadius,
                            color: config.buttonTextColor,
                            fontFamily: config.buttonFont,
                            fontWeight: config.buttonFontWeight
                        }}
                        onClick={() => toast.success(config.successMessage)}
                    >
                        {config.buttonText}
                    </Button>
                </div>
            </div>
        </div>
    )
}
