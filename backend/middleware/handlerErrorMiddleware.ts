import { Request, Response, NextFunction } from "express";
import multer from "multer";

type PossibleErrors = multer.MulterError | Error; // tipado del error


export const multerErrorHandler = (
    err: PossibleErrors,
    req: Request,
    res: Response,
    next: NextFunction
  ):void => {
    if (err instanceof multer.MulterError) {
      // Errores de Multer (por ejemplo, límite de archivos superado)
      res.status(400).json({
        ok: false,
        error: "Multer error",
        message: err.message,
        code: err.code,
      });

      return;
    }
  
    next(); // Si no hay error, continuar
  };
  