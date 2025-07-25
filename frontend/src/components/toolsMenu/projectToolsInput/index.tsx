import { useProjectEditorContext } from "@/context/projectEditorContext"
import { debounce } from 'lodash'
import { ColorInput } from "@/components/uiCustom/colorInput"
import { SelectInput } from "@/components/uiCustom/selectInput"
import { TextareaInput } from "@/components/uiCustom/textareaInput"

interface ColorState {
    backgroundColor: string;
    titleColor: string;
    textColor: string;
    placeholderColor: string;
    inputBorderColor: string;
}

export default function ProjectToolsInput() {
    const { config, save } = useProjectEditorContext()

    const handleChangeColor = debounce((key: keyof ColorState, value: string) => {
        save(key, value)
    }, 100)

    return (
        <div className="flex flex-col overflow-y-visible">
            <ColorInput
                label="Background Color"
                color={config.backgroundColor}
                onChange={(value) => handleChangeColor("backgroundColor", value)}
            />
            <ColorInput
                label="Title Color"
                color={config.titleColor}
                onChange={(value) => handleChangeColor("titleColor", value)}
            />
            <ColorInput
                label="Text Color"
                color={config.textColor}
                onChange={(value) => handleChangeColor("textColor", value)}
            />
            <ColorInput
                label="Placeholder Color"
                color={config.placeholderColor}
                onChange={(value) => handleChangeColor("placeholderColor", value)}
            />
            <ColorInput
                label="Border Color"
                color={config.inputBorderColor}
                onChange={(value) => handleChangeColor("inputBorderColor", value)}
            />
            <SelectInput
                label="Border Width"
                defaultValue="1px"
                options={["0px", "1px", "2px", "4px", "8px"]}
                onChange={(value) => save("inputBorderWidth", value)}
            />
            <SelectInput
                label="Border Radius"
                defaultValue="0"
                options={["0", "4px", "6px", "8px", "10px", "16px"]}
                onChange={(value) => save("inputBorderRadius", value)}
            />
            <SelectInput
                label="Hero Font"
                defaultValue="inter"
                options={["inter", "roboto", "raleway", "rubik", "lora"]}
                onChange={(value) => save("heroFont", value)}
            />
            <SelectInput
                label="Font Weight"
                defaultValue="400"
                options={["300", "400", "500", "700", "900"]}
                onChange={(value) => save("heroFontWeight", value)}
            />
            <TextareaInput
                label="Hero Text"
                value={config.heroText}
                onChange={(e) => save("heroText", e.target.value)}
            />
            <SelectInput
                label="Sub Font"
                defaultValue="inter"
                options={["inter", "roboto", "raleway", "rubik", "lora"]}
                onChange={(value) => save("subFont", value)}
            />
            <SelectInput
                label="Font Weight"
                defaultValue="400"
                options={["300", "400", "500", "700", "900"]}
                onChange={(value) => save("subFontWeight", value)}
            />
            <TextareaInput
                label="Sub Text"
                value={config.subText}
                onChange={(e) => save("subText", e.target.value)}
            />
            <TextareaInput
                label="Placeholder Text"
                value={config.placeholderText}
                onChange={(e) => save("placeholderText", e.target.value)}
            />
        </div>
    )
}
