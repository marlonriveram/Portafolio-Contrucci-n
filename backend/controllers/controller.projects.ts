import { Request, Response } from "express";
import { ProjectModel } from "../models/model.project";
import { deleteAllImagesInFolder, deleteFolder } from "../helpers/cloudinaryDeleteFile";

export const getAll = async (req: Request, res: Response) => {
    try {
        const projects = await ProjectModel.find()
        res.status(200).json(projects)

    } catch (error) {
        res.status(500).json({ error: "Error al obtener los proyectos" });
    }
}
export const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const project = await ProjectModel.find({ _id: id })
        res.status(200).json(project)

    } catch (error) {
        res.status(500).json({ error: "Error al obtener los proyectos" });
    }
}
export const create = async (req: Request, res: Response) => {
    try {
        const newProject = req.body
        const nuevoProyecto = new ProjectModel(newProject)

        const result = await nuevoProyecto.save();

        res.json({ data: result })
    } catch (err) { // ESTO SE MIRA DESPUES PARA CORREGIR
        console.log(err)
    }
}
export const update = async (req: Request, res: Response) => {
    try {
        res.send("update")
    } catch (error) {
        console.log(error)
    }
}
export const deleteById = async (req: Request, res: Response) => {
    try {
        const { folderName } = req.body
        const { id } = req.params

        /*Cloudinary no permite borrar una carpeta llena debe estar vacia */
        await deleteAllImagesInFolder(folderName) // Borrar todas la imagnes de la carpeta
        await deleteFolder(folderName) // eleminar carpeta

        const projectDelete = await ProjectModel.findByIdAndDelete(id)

        if (!projectDelete) {
            return res.status(404).json({ ok: false, data: "Proyecto no encontrado" })
        }
        res.status(200).json({ ok: true, data: { projectDelete } })

    } catch (error) {
        console.error("ERROR en deleteById:", error);
        res.status(500).json({ error: "Error al obtener los proyectos" });
    }
}