export async function projectIdParams() {
    const project = await fetch('https://...').then((res) => res.json())

    return project.map((id: string) => ({
        id: id,
    }))
}