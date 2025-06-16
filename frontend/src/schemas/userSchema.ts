import { z } from "zod";

export const userSchema = z.object({
    email: z.string().min(3,"email must be 3 characters"),
    password: z.string().min(1,"password must be 1 character")
})

export type User = z.infer<typeof userSchema>