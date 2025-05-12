import cloudinary from "../config/claudinary.config";

// Se crea una interface de lo que retornara 
interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  [key: string]: any; // Add other properties as needed
}

export const uploadToCloudinary = (fileBuffer: Buffer,title:string): Promise<CloudinaryUploadResult> => {
    return new Promise((resolve, reject) => {
      // upload_stream: Permites subir archivos que estan en un buffer
      const stream = cloudinary.uploader.upload_stream({ 
        resource_type: "image", // especifica el tipo de archivo
        folder: title, // opcional, dice que se guarde los archivos en una carpete especifica
      }, (error, result) => { // funcion que se ejecuta cuando se terma la subida devuelve respuesta exitosa  o error
        if (error) return reject(error);
        resolve(result as CloudinaryUploadResult); // aseguras el tipo aquí también
      });
      stream.end(fileBuffer); // Envia los archivos a cloudinary
    });
  };
  

