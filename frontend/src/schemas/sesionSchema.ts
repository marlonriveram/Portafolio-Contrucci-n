import { z } from "zod";

const userSchema = z.object({
    email: z.string(),
    exp: z.number(),
    iat: z.number(),
    userId: z.string()
  })

export const sesionSchema = z.object({
  ok: z.boolean(),
  user:userSchema,
});

export type SesionResponse = z.infer<typeof sesionSchema>
export type UserSesion = z.infer<typeof userSchema>