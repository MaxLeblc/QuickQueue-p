import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function ProjectToolsButton() {
    const [buttonColor, setButtonColor] = useState("#000000")
    const [buttonBorderColor, setButtonBorderColor] = useState("#000000")
    const [buttonTextColor, setButtonTextColor] = useState("#000000")
    const [backgroundColor, setBackgroundColor] = useState("#000000")

    const [buttonText, setButtonText] = useState("Button")
    const [successMessage, setSuccessMessage] = useState("You're on the waitlist!")

    return (
        <div className="flex flex-col ">
            <div className="flex justify-between items-center mb-4">
                <p>Button Color</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={buttonColor} onChange={(e) => setButtonColor(e.target.value)} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Button Border</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={buttonBorderColor} onChange={(e) => setButtonBorderColor(e.target.value)} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Button Text Color</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={buttonTextColor} onChange={(e) => setButtonTextColor(e.target.value)} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Background Color</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Border Width</p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0px">0px</SelectItem>
                        <SelectItem value="1px">1px</SelectItem>
                        <SelectItem value="2px">2px</SelectItem>
                        <SelectItem value="4px">4px</SelectItem>
                        <SelectItem value="8px">8px</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Border Radius</p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="None">None</SelectItem>
                        <SelectItem value="Small">Small</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Large">Large</SelectItem>
                        <SelectItem value="XL">XL</SelectItem>
                        <SelectItem value="Full">Full</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Font</p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Inter" style={{ fontFamily: "inter, serif" }}>Inter</SelectItem>
                        <SelectItem value="Roboto" style={{ fontFamily: "roboto, serif" }}>Roboto</SelectItem>
                        <SelectItem value="Railway" style={{ fontFamily: "railway, serif" }}>Railway</SelectItem>
                        <SelectItem value="Rubik" style={{ fontFamily: "rubik, serif" }}>Rubik</SelectItem>
                        <SelectItem value="Lora" style={{ fontFamily: "lora, serif" }}>Lora</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Font Weight</p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Thin">Thin</SelectItem>
                        <SelectItem value="Normal">Normal</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Bold">Bold</SelectItem>
                        <SelectItem value="Black">Black</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col justify-between mb-4">
                <p>Button Text</p>
                <Textarea style={{ resize: "none" }} value={buttonText} onChange={(e) => setButtonText(e.target.value)} />
            </div>
            <div className="flex flex-col justify-between mb-4">
                <p>Success Message</p>
                <Textarea style={{ resize: "none" }} value={successMessage} onChange={(e) => setSuccessMessage(e.target.value)} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Show Logo</p>
                <Switch />
            </div>
        </div>
    )
}
