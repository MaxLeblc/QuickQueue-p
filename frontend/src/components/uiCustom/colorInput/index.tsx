import React from 'react'

export const ColorInput = React.memo(
    function ColorInput({
        label,
        color,
        onChange,
    }: {
        label: string;
        color: string;
        onChange: (value: string) => void
    }) {
        return (
            <div className="flex justify-between items-center mb-4">
                <p>{label}</p>
                <input
                    className="dark:bg-transparent h-8 w-8 cursor-pointer"
                    type="color"
                    value={color}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        )
    }
)
ColorInput.displayName = "ColorInput"
