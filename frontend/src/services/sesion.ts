import axios from "axios"
import { SessionResponse } from "../types/sesionResponse"

export const sesion = async (): Promise<SessionResponse> => {
    const res = await axios("http://localhost:3000/api/auth/profile",{
        method:"GET",
        withCredentials:true,
    })
    return res.data.user
}