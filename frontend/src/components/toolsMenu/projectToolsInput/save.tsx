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
    const { state, setState } = useProjectEditorContext()

    const handleChangeColor = debounce((newColor: ColorState) => {
        setState(prevState => ({
            ...prevState,
            ...newColor
        }))
    }, 100)

    return (
        <div className="flex flex-col overflow-y-visible">
            <ColorInput
                label="Background Color"
                color={state.backgroundColor}
                onChange={(value) => handleChangeColor({ ...state, backgroundColor: value })}
            />
            <ColorInput
                label="Title Color"
                color={state.titleColor}
                onChange={(value) => handleChangeColor({ ...state, titleColor: value })}
            />
            <ColorInput
                label="Text Color"
                color={state.textColor}
                onChange={(value) => handleChangeColor({ ...state, textColor: value })}
            />
            <ColorInput
                label="Placeholder Color"
                color={state.placeholderColor}
                onChange={(value) => handleChangeColor({ ...state, placeholderColor: value })}
            />
            <ColorInput
                label="Border Color"
                color={state.inputBorderColor}
                onChange={(value) => handleChangeColor({ ...state, inputBorderColor: value })}
            />
            <SelectInput
                label="Border Width"
                defaultValue="1px"
                options={["0px", "1px", "2px", "4px", "8px"]}
                onChange={(value) => setState(prevState => ({ ...prevState, inputBorderWidth: value }))}
            />
            <SelectInput
                label="Border Radius"
                defaultValue="0"
                options={["0", "4px", "6px", "8px", "10px", "16px"]}
                onChange={(value) => setState(prevState => ({ ...prevState, inputBorderRadius: value }))}
            />
            <SelectInput
                label="Hero Font"
                defaultValue="inter"
                options={["inter", "roboto", "raleway", "rubik", "lora"]}
                onChange={(value) => setState(prevState => ({ ...prevState, heroFont: value }))}
            />
            <SelectInput
                label="Font Weight"
                defaultValue="400"
                options={["300", "400", "500", "700", "900"]}
                onChange={(value) => setState(prevState => ({ ...prevState, heroFontWeight: value }))}
            />
            <TextareaInput
                label="Hero Text"
                value={state.heroText}
                onChange={(e) => setState(prevState => ({ ...prevState, heroText: e.target.value }))}
            />
            <SelectInput
                label="Sub Font"
                defaultValue="inter"
                options={["inter", "roboto", "raleway", "rubik", "lora"]}
                onChange={(value) => setState(prevState => ({ ...prevState, subFont: value }))}
            />
            <SelectInput
                label="Font Weight"
                defaultValue="400"
                options={["300", "400", "500", "700", "900"]}
                onChange={(value) => setState(prevState => ({ ...prevState, subFontWeight: value }))}
            />
            <TextareaInput
                label="Sub Text"
                value={state.subText}
                onChange={(e) => setState(prevState => ({ ...prevState, subText: e.target.value }))}
            />
            <TextareaInput
                label="Placeholder Text"
                value={state.placeholderText}
                onChange={(e) => setState(prevState => ({ ...prevState, placeholderText: e.target.value }))}
            />
        </div>
    )
}
