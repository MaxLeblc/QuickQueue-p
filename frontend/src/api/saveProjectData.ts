import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000"
})

export const saveProjectData = async (projectId: string, data: any) => {
    try {
        // const response = await api.post(`/dashboard/${projectId}`, data)
        const response = await api.post(`/dashboard`, data)
            .then((response) => {
                const jsonData = JSON.stringify(response.data);
                console.log("Data transformed to JSON:", jsonData);
            })
        // return response.data

    } catch (error) {
        console.error("Project failed to save", error)
        throw error
    }
}
