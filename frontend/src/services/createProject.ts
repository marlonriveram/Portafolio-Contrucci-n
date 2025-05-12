import axios from "axios";
import { Projects } from "../types/project";

export const createProject = async (data:Projects) =>{
    try {
        const response = await axios.post("http://localhost:3000/api/projects/",data)
        return response.data
        
    } catch (error:any) {
        console.error(error.message)
    }
}