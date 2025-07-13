import { NextFunction, Request, Response } from "express"
import jwt, { JsonWebTokenError } from "jsonwebtoken"

export const validatorUser= () =>{
    return (req:any, res: Response, next:NextFunction) =>{
        const token = req.cookies?.token;
        // if (!token) {
        //     return res.status(401).json({ ok: false, message: "Token no proporcionado" });
        // }
        try {
            const user = jwt.verify(token, process.env.JWT_SECRET as string);
            req.user = user;
            next();
        } catch (error) {
        
            if(
                error instanceof JsonWebTokenError ||
                error instanceof jwt.JsonWebTokenError
            ){
                return res.status(401).json({ok:false,  message:error.message})
            }

            res.status(401).json({ok:false, message:"Error del servidor"})
        }
    }
}