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
    const { config, save } = useProjectEditorContext()

    const handleChangeColor = debounce((key: keyof ColorState, value: string) => {
        save(key, value)
    }, 100)

    return (
        <div className="flex flex-col ">
            <ColorInput
                label="Button Color"
                color={config.buttonColor}
                onChange={(value) => handleChangeColor("buttonColor", value)}
            />
            <ColorInput
                label="Button Border"
                color={config.buttonBorderColor}
                onChange={(value) => handleChangeColor("buttonBorderColor", value)}
            />
            <ColorInput
                label="Button Text Color"
                color={config.buttonTextColor}
                onChange={(value) => handleChangeColor("buttonTextColor", value)}
            />
            <SelectInput
                label="Border Width"
                defaultValue="1px"
                options={["0px", "1px", "2px", "4px", "8px"]}
                onChange={(value) => save("buttonBorderWidth", value)}
            />
            <SelectInput
                label="Border Radius"
                defaultValue="0"
                options={["0", "4px", "6px", "8px", "10px", "16px"]}
                onChange={(value) => save("buttonBorderRadius", value)}
            />
            <SelectInput
                label="Font"
                defaultValue="inter"
                options={["inter", "roboto", "raleway", "rubik", "lora"]}
                onChange={(value) => save("buttonFont", value)}
            />
            <SelectInput
                label="Font Weight"
                defaultValue="400"
                options={["300", "400", "500", "700", "900"]}
                onChange={(value) => save("buttonFontWeight", value)}
            />

            <TextareaInput
                label="Button Text"
                value={config.buttonText}
                onChange={(e) => save("buttonText", e.target.value)}
            />
            <TextareaInput
                label="Success Message"
                value={config.successMessage}
                onChange={(e) => save("successMessage", e.target.value)}
            />
            <div className="flex justify-between items-center mb-4">
                <p>Show Logo</p>
                <Switch checked={config.showLogo} onClick={() => save("showLogo", !config.showLogo)} />
            </div>
        </div>
    )
}
