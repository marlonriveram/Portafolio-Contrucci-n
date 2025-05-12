import { Request, Response } from "express";
import projectModel from "../models/model.project"

export const getAll = async (req : Request, res: Response) =>{
    try {
        const projects = await projectModel.find()
        res.status(200).json(projects)

    } catch (error) {
        res.status(500).json({ error: "Error al obtener los proyectos" });
    }
}
export const getById = async (req : Request, res: Response) =>{
       try {
        const {id} = req.params

        const project = await projectModel.find({_id:id})
        res.status(200).json(project)
        
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los proyectos" });
    }
}
export const create = async (req : Request, res: Response) =>{
    try {
        const newProject = req.body
        const nuevoProyecto = new projectModel(newProject)

        const result = await nuevoProyecto.save();

        res.json({data:result})
      } catch (err) { // ESTO SE MIRA DESPUES PARA CORREGIR
        console.log(err)
      } 
}
export const update = async (req : Request, res: Response) =>{
    try {
        res.send("update")
    } catch (error) {
        console.log(error)
    }
}
export const deleteById = async (req : Request, res: Response) =>{
    try {
        res.send("deleteById")
    } catch (error) {
        console.log(error)
    }
}