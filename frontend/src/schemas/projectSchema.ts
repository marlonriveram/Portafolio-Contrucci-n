import { z } from "zod"


export enum ProjectCategory {
    Residencial = "residencial",
    Comercial = "comercial"
}

export const projectSchema = z.object({
    title: z.string().min(1, "title must had min 10 characters"),

    category: z.nativeEnum(ProjectCategory, {
        required_error: "Debes seleccionar una categoría",
        invalid_type_error: "Categoría no válida",
    }),

    costumer: z.string({
        invalid_type_error: "costumer must be a string",
    }).optional(),

    shortDescription: z.string().min(1),

    longDescription: z.string().min(1),

    images: z.any().optional(),

    date: z.coerce.date().refine((d) => !isNaN(d.getTime()), {
        message: "Date is required and must be valid",
    }),
})

export type FormValues = z.infer<typeof projectSchema>

export type FormInputs = {
  title: string;
  shortDescription: string;
  longDescription: string;
  images: FileList | null;
  date: string;
};

