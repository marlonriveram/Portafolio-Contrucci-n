import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

export default cloudinary;