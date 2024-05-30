import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const SelectInput = ({ label, defaultValue, options, onChange }: { label: string, defaultValue: string, options: string[], onChange: (value: string) => void, }) => (
    <div className="flex justify-between items-center mb-4">
        <p>{label}</p>
        <Select defaultValue={defaultValue} onValueChange={onChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem value={option} style={{ fontFamily: `${option}, sans-serif` }}>{option}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
)