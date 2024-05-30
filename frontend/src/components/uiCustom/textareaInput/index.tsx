import { Textarea } from "@/components/ui/textarea"

export const TextareaInput = ({ label, value, onChange }: { label: string, value: string, onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void }) => (
    <div className="flex flex-col justify-between mb-4">
        <p>{label}</p>
        <Textarea style={{ resize: "none" }} value={value} onChange={onChange} />
    </div>
)