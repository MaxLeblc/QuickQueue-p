import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ProjectToolsInput() {
    // const [placeholderColor, setPlaceholderColor] = useState("#000000")
    // const [inputBorderColor, setInputBorderColor] = useState("#000000")
    // const [titleColor, setTitleColor] = useState("#000000")
    // const [textColor, setTextColor] = useState("#000000")

    // const [heroText, setHeroText] = useState("Signup to our waitlist")
    // const [subText, setSubText] = useState("Get exclusive news, latest updates, and exceptional discounts. Join the list!")
    // const [placeholderText, setPlaceholderText] = useState("Add your email")

    const [state, setState] = useState({
        backgroundColor: "#000000",
        titleColor: "#000000",
        textColor: "#000000",
        placeholderColor: "#000000",
        inputBorderColor: "#000000",
        heroText: "Signup to our waitlist",
        subText: "Get exclusive news, latest updates, and exceptional discounts. Join the list!",
        placeholderText: "Add your email"
    })

    const { backgroundColor, titleColor, textColor, placeholderColor, inputBorderColor, heroText, subText, placeholderText } = state

    return (
        <div className="flex flex-col ">
            <div className="flex justify-between items-center mb-4">
                <p>Background Color</p>
                {/* <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} /> */}
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={backgroundColor} onChange={(e) => setState(prevState => ({ ...prevState, backgroundColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Title Color</p>
                {/* <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={titleColor} onChange={(e) => setTitleColor(e.target.value)} /> */}
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={titleColor} onChange={(e) => setState(prevState => ({ ...prevState, titleColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Text Color</p>
                {/* <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} /> */}
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={textColor} onChange={(e) => setState(prevState => ({ ...prevState, textColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Placeholder Color</p>
                {/* <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={placeholderColor} onChange={(e) => setPlaceholderColor(e.target.value)} /> */}
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={placeholderColor} onChange={(e) => setState(prevState => ({ ...prevState, placeholderColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Border Color</p>
                {/* <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={inputBorderColor} onChange={(e) => setInputBorderColor(e.target.value)} /> */}
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={inputBorderColor} onChange={(e) => setState(prevState => ({ ...prevState, inputBorderColor: e.target.value }))} />
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
                <p>Hero Font</p>
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
                <p>Hero Text</p>
                <Textarea style={{ resize: "none" }} value={heroText} onChange={(e) => setHeroText(e.target.value)} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Sub Font</p>
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
                <p>Sub Text</p>
                <Textarea style={{ resize: "none", height: "80px" }} value={subText} onChange={(e) => setSubText(e.target.value)} />
            </div>
            <div className="flex flex-col justify-between mb-4">
                <p>Placeholder Text</p>
                <Textarea style={{ resize: "none" }} value={placeholderText} onChange={(e) => setPlaceholderText(e.target.value)} />
            </div>
        </div>
    )
}
