import axios from "axios";
import { User } from "../schemas/userSchema";


export const authUser = async (data:User) =>{
    try {
        const res = await axios.post("http://localhost:3000/api/auth/login",data)
        return res.data
        
    } catch (error:any) {
        throw error
    }
}