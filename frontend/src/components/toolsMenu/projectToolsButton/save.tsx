import { useProjectEditorContext } from "@/context/projectEditorContext"
import { debounce } from 'lodash'
import { ColorInput } from "@/components/uiCustom/colorInput"
import { SelectInput } from "@/components/uiCustom/selectInput"
import { TextareaInput } from "@/components/uiCustom/textareaInput"
import { Switch } from "@/components/ui/switch"

interface ColorState {
    buttonColor: string;
    buttonBorderColor: string;
    buttonTextColor: string;
}

export default function ProjectToolsButton() {
    const { state, setState } = useProjectEditorContext()

    const handleChangeColor = debounce((newColor: ColorState) => {
        setState(prevState => ({
            ...prevState,
            ...newColor
        }))
    }, 100)

    return (
        <div className="flex flex-col ">
            <ColorInput
                label="Button Color"
                color={state.buttonColor}
                onChange={(value) => handleChangeColor({ ...state, buttonColor: value })}
            />
            <ColorInput
                label="Button Border"
                color={state.buttonBorderColor}
                onChange={(value) => handleChangeColor({ ...state, buttonBorderColor: value })}
            />
            <ColorInput
                label="Button Text Color"
                color={state.buttonTextColor}
                onChange={(value) => handleChangeColor({ ...state, buttonTextColor: value })}
            />
            <SelectInput
                label="Border Width"
                defaultValue="1px"
                options={["0px", "1px", "2px", "4px", "8px"]}
                onChange={(value) => setState(prevState => ({ ...prevState, buttonBorderWidth: value }))}
            />
            <SelectInput
                label="Border Radius"
                defaultValue="0"
                options={["0", "4px", "6px", "8px", "10px", "16px"]}
                onChange={(value) => setState(prevState => ({ ...prevState, buttonBorderRadius: value }))}
            />
            <SelectInput
                label="Font"
                defaultValue="inter"
                options={["inter", "roboto", "raleway", "rubik", "lora"]}
                onChange={(value) => setState(prevState => ({ ...prevState, buttonFont: value }))}
            />
            <SelectInput
                label="Font Weight"
                defaultValue="400"
                options={["300", "400", "500", "700", "900"]}
                onChange={(value) => setState(prevState => ({ ...prevState, buttonFontWeight: value }))}
            />

            <TextareaInput
                label="Button Text"
                value={state.buttonText}
                onChange={(e) => setState(prevState => ({ ...prevState, buttonText: e.target.value }))}
            />
            <TextareaInput
                label="Success Message"
                value={state.successMessage}
                onChange={(e) => setState(prevState => ({ ...prevState, successMessage: e.target.value }))}
            />
            <div className="flex justify-between items-center mb-4">
                <p>Show Logo</p>
                <Switch checked={state.showLogo} onClick={() => setState(prevState => ({ ...prevState, showLogo: !state.showLogo }))} />
            </div>
        </div>
    )
}
