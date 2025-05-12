import { NextFunction, Request, Response } from "express";
import { z } from "zod";


const projectSchema = z.object({
    title: z.string({
        required_error: "title is required",
        invalid_type_error: "title must be a string",
    }),
    shortDescription: z.string({
        required_error: "shortDescription is required",
        invalid_type_error: "shortDescription must be a string",
    }),
    longDescription: z.string({
        required_error: "longDescription is required",
        invalid_type_error: "longDescription must be a string",
    }),
    mainImage: z.string().url().refine((value) => value !== "", {
        message: "Main image URL is required",
    }),
    images: z.array(z.string().url()).nonempty("The images array cannot be empty"),
    date: z.string().date(),
})

//optener type del schema
type TypeBody = z.infer<typeof projectSchema>

export const ValidatorSchemaUser = (
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


