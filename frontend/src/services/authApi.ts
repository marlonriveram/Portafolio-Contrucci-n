import axios from "axios";
import { User } from "../schemas/userSchema";


export const authUser = async (data:User) =>{
    try {
        const res = await axios.post("http://localhost:3000/api/login",data,{withCredentials:true})
        return res.data
        
    } catch (error:any) {
        console.log(error.message)
    }
}