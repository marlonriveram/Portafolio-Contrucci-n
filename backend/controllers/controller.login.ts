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

        const { _id, email: userEmail } = user.toObject();
        const token = jwt.sign({ userId: _id, email: userEmail }, process.env.JWT_SECRET as string);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24,
        });


        res.status(200).json({ ok: true, message: "Sesión iniciada con exito" });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ ok: false, message: "Error interno del servidor" });
    }




};
