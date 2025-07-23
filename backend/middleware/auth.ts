import { NextFunction, Request, Response } from "express"
import jwt, { JsonWebTokenError } from "jsonwebtoken"

export const validatorUser = () => {

    interface AuthRequest extends Request {
        user?: string | jwt.JwtPayload;
    }

    return (req: AuthRequest, res: Response, next: NextFunction) => {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ ok: false, message: "No se ha iniciado sesión" });
        }
        try {
            const user = jwt.verify(token, process.env.JWT_SECRET as string);
            req.user = user;
            next();
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).json({ ok: false, message: "El token ha expirado" });
            }

            if (error instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({ ok: false, message: "Token inválido" });
            }

            return res.status(500).json({ ok: false, message: "Error del servidor" });
        }
    }
}