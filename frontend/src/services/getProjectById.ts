import axios from "axios"
import { ProjectById, projectByIdSchema } from "../schemas/projectSchema"

export const getProjectById = async (id:string) =>{
    try {
        const res = await axios(`http://localhost:3000/api/projects/${id}`)
        const parsed = projectByIdSchema.safeParse(res.data[0])
        
        if(!parsed.success) {
            throw new Error ("Projecto no encontrado")
        }
       
        const data = parsed.data
        return data
    } catch (error) {
        throw error
    }
}