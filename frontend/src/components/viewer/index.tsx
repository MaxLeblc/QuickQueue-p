"use client"

import { useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Viewer() {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFile = () => {
        inputRef.current?.click()
    }

    const backgroundColor = "#F4A2BA"

    return (
        <div className="flex flex-col justify-center items-center w-lg h-2/5 p-10 mr-auto" style={{ background: backgroundColor }} >
            <div className="cursor-pointer" onClick={handleFile} >
                <Avatar className={cn("w-20 h-20 mb-8")}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    <Input id="picture" type="file" ref={inputRef} className="hidden" />
                </Avatar>
            </div>
            <h1 className="font-bold text-4xl">Titrage du Titre</h1>
            <p className="text-wrap text-center py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero repellat laborum ab? Voluptatem quam tempora ea? Vitae harum, delectus est ut perferendis ducimus assumenda officia saepe expedita quia animi.</p>

            <div className="flex items-center">
            <Input className={cn("mr-6")}/>
            <Button>Button</Button>    
            </div>
        </div>
    )
}
