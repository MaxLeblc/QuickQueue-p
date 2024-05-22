
function demoComponent() {
    return (
        <div data-size="large" className="data-[size=large]:p-8">
            Hello world
        </div>
    )
}

function demoComponent() {
    const [selected, setSelected] = useState(false)
    return (
        <div className={cn(selected ? "p-8" : "p-4")}>
            Hello world
        </div>
    )
}