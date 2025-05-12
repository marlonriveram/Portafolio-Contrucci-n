import { model, Schema, ValidatorProps } from "mongoose"

const validator = (arr:Array<String>) =>{
    return arr.length > 0; // Asegura al menos una imagen
}

const projectSchema = new Schema({
    title:{type:String,required:true,unique:true},
    shortDescription:{type:String,required:true},
    longDescription:{type:String,required:true},
    mainImage:{type:String,required:true},
    images:{
        type: [String],
        validate: { // validacion personalizada
          validator: validator, // validacion
          //mensaje de error si no pasa la validación
          message: (props:ValidatorProps) => `El arreglo de imágenes no puede estar vacío. Valor recibido: ${JSON.stringify(props.value)}`
        }
      },
    date:{type:Date,required:true},
},{timestamps:true})

export default model('projects',projectSchema,'Projects')