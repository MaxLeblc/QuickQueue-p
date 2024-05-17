import { useProjectEditorContext } from "@/components/projectEditor"
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
    const { state, setState } = useProjectEditorContext()

    return (
        <div className="flex flex-col ">
            <div className="flex justify-between items-center mb-4">
                <p>Button Color</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={state.buttonColor} onChange={(e) => setState(prevState => ({ ...prevState, buttonColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Button Border</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={state.buttonBorderColor} onChange={(e) => setState(prevState => ({ ...prevState, buttonBorderColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Button Text Color</p>
                <input className="dark:bg-transparent h-8 w-8 cursor-pointer" type="color" value={state.buttonTextColor} onChange={(e) => setState(prevState => ({ ...prevState, buttonTextColor: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Border Width</p>
                <Select defaultValue="0px" onValueChange={(value) => setState(prevState => ({ ...prevState, buttonBorderWidth: value }))}>
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
                <Select defaultValue="0" onValueChange={(value) => setState(prevState => ({ ...prevState, buttonBorderRadius: value }))}>
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
                <p>Font</p>
                <Select defaultValue="inter" onValueChange={(value) => setState(prevState => ({ ...prevState, buttonFont: value }))}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="inter" style={{ fontFamily: "inter, sans-serif" }}>Inter</SelectItem>
                        <SelectItem value="roboto" style={{ fontFamily: "roboto, sans-serif" }}>Roboto</SelectItem>
                        <SelectItem value="raleway" style={{ fontFamily: "railway, sans-serif" }}>Railway</SelectItem>
                        <SelectItem value="rubik" style={{ fontFamily: "rubik, sans-serif" }}>Rubik</SelectItem>
                        <SelectItem value="lora" style={{ fontFamily: "lora, serif" }}>Lora</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Font Weight</p>
                <Select defaultValue="400" onValueChange={(value) => setState(prevState => ({ ...prevState, buttonFontWeight: value }))}>
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
                <p>Button Text</p>
                <Textarea style={{ resize: "none" }} value={state.buttonText} onChange={(e) => setState(prevState => ({ ...prevState, buttonText: e.target.value }))} />
            </div>
            <div className="flex flex-col justify-between mb-4">
                <p>Success Message</p>
                <Textarea style={{ resize: "none" }} value={state.successMessage} onChange={(e) => setState(prevState => ({ ...prevState, successMessage: e.target.value }))} />
            </div>
            <div className="flex justify-between items-center mb-4">
                <p>Show Logo</p>
                <Switch checked={state.showLogo} onClick={() => setState(prevState => ({ ...prevState, showLogo: !state.showLogo }))} />
            </div>
        </div>
    )
}
