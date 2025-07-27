import { Request, Response } from "express";
import { UserModel } from "../models/model.user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ ok: false, message: "Email invalido" });
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({ ok: false, message: "password invalido" });
        }

        // user.toObject() convierte el documento de Mongoose en un objeto JavaScript normal para poder trabajar con sus datos de manera más simple.

        const { _id, email: userEmail } = user.toObject();
        const token = jwt.sign({ userId: _id, email: userEmail }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });



        res.status(200).json({ ok: true, message: "sesion iniciada con exito" });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ ok: false, message: "Error interno del servidor" });
    }

}

export const logout = async ( req: Request, res : Response) =>{
    try {
        res.clearCookie("token",{
            httpOnly:true,
            secure:true,
            sameSite:"none"
        })

        res.status(200).json({ok:true,message:"Sesión Cerrada con éxito"})
    } catch (error) {
        res.status(500).json({ok:false, message:"Error del servidor"})
    }
}
export const profile = (req: any, res: Response) => {
    try {
        const user = req.user
        // if (!user) return res.status(404).json({ ok: false, message: "Usuario no esta logueado" })

        res.status(200).json({ ok: true, user })
    } catch (error) {
        res.status(500).json({ ok: false, message: "Error interno del servidor" });
    }
}
