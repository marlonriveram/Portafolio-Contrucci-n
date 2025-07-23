import express, { Request, Response } from "express"
import { login, logout, profile } from "../controllers/controller.auth"
import { validatorUser } from "../middleware/auth"


const router = express.Router()


router.post("/login",login)
router.post ("/logout",validatorUser(),logout)
router.get("/profile",validatorUser(),profile)

export default router