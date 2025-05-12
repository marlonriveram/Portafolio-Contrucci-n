import mongoose from "mongoose";

export const conectDB = async () =>{

    if(!process.env.MONGODB_URL){
        throw new Error('La variable MONGODB_URL no existe');
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('La conexion fue exitosa')

    } catch (error) {
        console.log('Hubo un error al conectarnos a la DB',error)
    }
}