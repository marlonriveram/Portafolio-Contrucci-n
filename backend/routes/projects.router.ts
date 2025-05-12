import express from "express"
import {
    create,
    deleteById,
    getAll,
    getById,
    update
} from "../controllers/controller.projects"
import { ValidatorSchemaUser } from "../middleware/zod"

const router = express.Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/", ValidatorSchemaUser,create)
router.put("/:id", update)
router.delete("/:id", deleteById)

export default router