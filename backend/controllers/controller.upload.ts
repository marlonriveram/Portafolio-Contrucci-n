
// COMENTAR EL CODIGO PARA ENTENDERLO MEJOR FALTA POR HACER ESO
import { Request, Response } from "express";
import { uploadToCloudinary } from "../helpers/cloudinary";
import { string } from "zod";



export const upLoadFiles = async (req: Request, res: Response) => {
    try {
        const {title} = req.body
        const files = req.files as Express.Multer.File[];
        
     
        /*se usa promise.all es por que como se van a subir varios archivos a cloudinary
          esta espera que se suban todos, retorna un array con la resolve de todas las promesas 
        */
        const results = await Promise.all(
            //uploadToCloudinary: funcion de carga de archivos a cloudinary
            files.map(file => uploadToCloudinary(file.buffer,title))
        );
        // // // Puedes devolver solo las URLs, los public_id o el objeto completo de Cloudinary
        const urls= results.map((result) => ({
            url: result.secure_url,
            public_id: result.public_id
        }));
        res.status(200).json(urls);
    } catch (err) {
        console.error('Error al subir imágenes:', err);
        res.status(500).json({ error: 'Error al subir imágenes' });
    }
}