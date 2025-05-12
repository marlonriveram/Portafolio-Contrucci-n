import express from "express"
import projectRouter from "./projects.router"
import uploadRouter from "./upload.router"

const router = express.Router()

router.use("/projects",projectRouter)
router.use("/upload",uploadRouter)

export default router