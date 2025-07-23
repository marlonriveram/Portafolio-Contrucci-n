import axios from "axios";
import { User } from "../schemas/userSchema";


export const authUser = async (data:User) =>{
    try {
        
        const res = await axios("http://localhost:3000/api/auth/login",{
            method:"POST",
            data,
            withCredentials:true})
        return res.data
        
    } catch (error:any) {
        throw error
    }
}