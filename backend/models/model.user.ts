import { model, Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "email must be required"],
        unique: true, // el email debe ser unico
        lowercase: true, // pone el email en minuculas
        match: [/^\S+@\S+\.\S+$/, "email must be valid"], //regex para valider que sea de tipo email
    },

    password: { type: String, required: [true, "password must be required"] }
}, { timestamps: true })

export const UserModel = model("User", userSchema, "user")