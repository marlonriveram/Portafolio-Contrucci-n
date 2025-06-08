import { model, Schema, ValidatorProps } from "mongoose"


export enum ProjectCategory {
  Residencial = "residencial",
  Comercial = "comercial"
}

//Convierte el enum en un array iterable
const ProjectCategoryValues = Object.values(ProjectCategory);

const validator = (arr: Array<String>) => {
  return arr.length > 0; // Asegura al menos una imagen
}

const projectSchema = new Schema({
  title: {
    type: String,
    required: [true, "title must be requerid"],
    unique: true
  },
  category: {
    type: String,
    required: [true, "category must be requerid"],
    enum: {
      values: ProjectCategoryValues,
      message: "Categoría no válida. Las opciones permitidas son: {VALUES}",
    },
  },
  costumer: {
    type: String,
    default: ""
  },
  shortDescription: {
    type: String,
    required: [true, "shortDescription must be requerid"]
  },
  longDescription: {
    type: String,
    required: [true, "longDescription must be requerid"]
  },
  mainImage: {
    type: String,
    required: [true, " mainImage must be requerid"],
  },
  images: {
    type: [String],
    validate: { // validacion personalizada
      validator: validator, // validacion
      //mensaje de error si no pasa la validación
      message: (props: ValidatorProps) => `El arreglo de imágenes no puede estar vacío. Valor recibido: ${JSON.stringify(props.value)}`
    }
  },
  date: { type: Date, required: true },
}, { timestamps: true })

export default model('projects', projectSchema, 'Projects')