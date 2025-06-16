import express from "express"
import projectRouter from "./projects.router"
import uploadRouter from "./upload.router"
import loginRouter from "./login.router"

const router = express.Router()

router.use("/projects",projectRouter)
router.use("/upload",uploadRouter)
router.use("/login",loginRouter)

export default router