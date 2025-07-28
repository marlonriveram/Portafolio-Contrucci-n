import { z } from "zod"


export enum ProjectCategory {
    Residencial = "residencial",
    Comercial = "comercial",
    Reforma = "reforma"
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


export const projectByIdSchema = z.object({
  _id: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  longDescription: z.string(),
  mainImage: z.string().url(),
  images: z.array(z.string()),
  category: z.string(),
  costumer: z.string(),
  date: z.string(), // Puedes usar z.coerce.date() si quieres convertirlo automáticamente a Date
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number(),
});

// Tipo inferido si lo necesitas para TypeScript:
export type ProjectById = z.infer<typeof projectByIdSchema>;

export type FormValues = z.infer<typeof projectSchema>

export type FormInputs = {
  title: string;
  shortDescription: string;
  longDescription: string;
  images: FileList | null;
  date: string;
};

