import express from "express"
import projectRouter from "./projects.router"
import uploadRouter from "./upload.router"
import authRouter from "./auth.router"

const router = express.Router()

router.use("/projects",projectRouter)
router.use("/upload",uploadRouter)
router.use("/auth",authRouter)

export default router