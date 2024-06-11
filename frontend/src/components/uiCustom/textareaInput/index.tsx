import React from "react"
import { Textarea } from "@/components/ui/textarea"

export const TextareaInput = React.memo(
    function TextareaInput({
        label,
        value,
        onChange
    }: {
        label: string,
        value: string,
        onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void
    }) {
        return (
            <div className="flex flex-col justify-between mb-4">
                <p>{label}</p>
                <Textarea
                    style={{ resize: "none" }}
                    value={value}
                    onChange={onChange}
                    name={label}
                />
            </div>
        );
    })
TextareaInput.displayName = "TextareaInput"
