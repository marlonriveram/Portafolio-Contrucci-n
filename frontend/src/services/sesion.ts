import axios from "axios"
import { sesionSchema, UserSesion } from "../schemas/sesionSchema"
// import { SessionResponse } from "../types/sesionResponse"

export const sesion = async ():Promise<UserSesion> => {
    const res = await axios("http://localhost:3000/api/auth/profile",{
        method:"GET",
        withCredentials:true,
    })

    const parsed = sesionSchema.safeParse(res.data)

  if (!parsed.success) {
    throw new Error("Respuesta del servidor inválida");
  }
 
  const data = parsed.data
    return data.user
}