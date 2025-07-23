import axios from "axios";

export const uploadImage = async (formData :FormData) =>{
    try {
        const response = await axios.post("http://localhost:3000/api/upload",formData,{withCredentials:true})
        return response.data
    } catch (error:any) {
        console.error(error.message)
    }
}