import { useProjectEditorContext } from "../../projectEditor"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ProjectToolsInput() {
    const { state, setState } = useProjectEditorContext()

    return (
        <div className="flex flex-col ">
            <div className="flex justify-between items-center mb-4">
                <p>Background Color</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={state.backgroundColor} onChange={(e) => setState(prevState => ({ ...prevState, backgroundColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Title Color</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={state.titleColor} onChange={(e) => setState(prevState => ({ ...prevState, titleColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Text Color</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={state.textColor} onChange={(e) => setState(prevState => ({ ...prevState, textColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Placeholder Color</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={state.placeholderColor} onChange={(e) => setState(prevState => ({ ...prevState, placeholderColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Border Color</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={state.inputBorderColor} onChange={(e) => setState(prevState => ({ ...prevState, inputBorderColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Border Width</p>
                <Select defaultValue="0px" onValueChange={(value) => setState(prevState => ({ ...prevState, inputBorderWidth: value }))}>
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
                <Select defaultValue="0" onValueChange={(value) => setState(prevState => ({ ...prevState, inputBorderRadius: value }))}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0">None</SelectItem>
                        <SelectItem value="4px">Small</SelectItem>
                        <SelectItem value="6px">Medium</SelectItem>
                        <SelectItem value="8px">Large</SelectItem>
                        <SelectItem value="10px">XL</SelectItem>
                        <SelectItem value="16px">Full</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Hero Font</p>
                <Select defaultValue="inter" onValueChange={(value) => setState(prevState => ({ ...prevState, heroFont: value }))}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectItem value="inter" style={{ fontFamily: "inter, sans-serif" }}>Inter</SelectItem>
                        <SelectItem value="roboto" style={{ fontFamily: "roboto, sans-serif" }}>Roboto</SelectItem>
                        <SelectItem value="raleway" style={{ fontFamily: "raleway, sans-serif" }}>RaleWay</SelectItem>
                        <SelectItem value="rubik" style={{ fontFamily: "rubik, sans-serif" }}>Rubik</SelectItem>
                        <SelectItem value="lora" style={{ fontFamily: "lora, serif" }}>Lora</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Font Weight</p>
                <Select defaultValue="400" onValueChange={(value) => setState(prevState => ({ ...prevState, heroFontWeight: value }))}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="300">Light</SelectItem>
                        <SelectItem value="400">Normal</SelectItem>
                        <SelectItem value="500">Medium</SelectItem>
                        <SelectItem value="700">Bold</SelectItem>
                        <SelectItem value="900">Black</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col justify-between mb-4">
                <p>Hero Text</p>
                <Textarea style={{ resize: "none" }} value={state.heroText} onChange={(e) => setState(prevState => ({ ...prevState, heroText: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Sub Font</p>
                <Select defaultValue="inter" onValueChange={(value) => setState(prevState => ({ ...prevState, subFont: value }))}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="inter" style={{ fontFamily: "inter, sans-serif" }}>Inter</SelectItem>
                        <SelectItem value="roboto" style={{ fontFamily: "roboto, sans-serif" }}>Roboto</SelectItem>
                        <SelectItem value="raleway" style={{ fontFamily: "railway, sans-serif" }}>Raleway</SelectItem>
                        <SelectItem value="rubik" style={{ fontFamily: "rubik, sans-serif" }}>Rubik</SelectItem>
                        <SelectItem value="lora" style={{ fontFamily: "lora, sans-serif" }}>Lora</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Font Weight</p>
                <Select defaultValue="400" onValueChange={(value) => setState(prevState => ({ ...prevState, subFontWeight: value }))}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="300">Thin</SelectItem>
                        <SelectItem value="400">Normal</SelectItem>
                        <SelectItem value="500">Medium</SelectItem>
                        <SelectItem value="700">Bold</SelectItem>
                        <SelectItem value="900">Black</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col justify-between mb-4">
                <p>Sub Text</p>
                <Textarea style={{ resize: "none", height: "80px" }} value={state.subText} onChange={(e) => setState(prevState => ({ ...prevState, subText: e.target.value }))} />
            </div>
            <div className="flex flex-col justify-between mb-4">
                <p>Placeholder Text</p>
                <Textarea style={{ resize: "none" }} value={state.placeholderText} onChange={(e) => setState(prevState => ({ ...prevState, placeholderText: e.target.value }))} />
            </div>
        </div>
    )
}
