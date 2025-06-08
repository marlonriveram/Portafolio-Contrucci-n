import axios from "axios";

export const getCards = async () =>{
    try {
        const response = await axios.get("http://localhost:3000/api/projects/")
        return response.data
    } catch (error:any) {
        console.log(error.message)
    }
}