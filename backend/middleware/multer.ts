import { Request } from "express";
import { FileFilterCallback } from "multer";
import multer from "multer";

// Configurar multer con memoryStorage
const storage = multer.memoryStorage() // guarda el archivo en un buffer (RAM)



// Función fileFilter para validar los archivos sean imagenes
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    // Aceptar solo archivos de imagen
    if (!file.mimetype.startsWith("image/")) { // BUSCAR EN CHATGPT PARA COMENTAR !file.mimetype.startsWith("image/")
        return cb(null, false);
    }
    cb(null, true); // Aceptar el archivo
};
const upLoad = multer({
    storage, // 
    fileFilter, // fucion para validar que el tipo de archivo sea imagen VOY ACA TOCA PROBAR

})

export default upLoad