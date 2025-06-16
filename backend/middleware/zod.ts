import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { ProjectCategory } from "../models/model.project";

const projectSchema = z.object({
    title: z.string({
        required_error: "title is required",
        invalid_type_error: "title must be a string",
    }),

    category: z.nativeEnum(ProjectCategory, {
        required_error: "category is required",
        invalid_type_error: "category must be one of the predefined options",
    }),

    costumer: z.string({
        invalid_type_error: "costumer must be a string",
    }).optional(),

    shortDescription: z.string({
        required_error: "shortDescription is required",
        invalid_type_error: "shortDescription must be a string",
    }),

    longDescription: z.string({
        required_error: "longDescription is required",
        invalid_type_error: "longDescription must be a string",
    }),

    mainImage: z.string({
        required_error: "mainImage is required",
        invalid_type_error: "mainImage must be a valid URL",
    }).url().min(1, "Main image URL is required"),

    images: z.array(z.string().url()).nonempty("The images array cannot be empty"),
    date: z.coerce.date({
        required_error: "Date is required",
        invalid_type_error: "Date must be a valid ISO string",
    }),
})

//optener type del schema
type TypeBody = z.infer<typeof projectSchema>

export const ValidatorSchemaProject = (
    req: Request,
    res: Response,
    next: NextFunction) => {
    const result = projectSchema.safeParse(req.body)

    if (!result.success) {
        res.status(400).json({ ok: false, message: result.error.errors })
    }

    req.body = result.data
    next()
}


