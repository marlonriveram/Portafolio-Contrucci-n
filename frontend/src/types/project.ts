import { ProjectCategory } from "../schemas/projectSchema"

export interface Projects {
    _id?:string
    title: string
    shortDescription: string
    longDescription: string
    costumer?:string
    category:ProjectCategory
    mainImage:string
    images: string[]
    date: Date
}

