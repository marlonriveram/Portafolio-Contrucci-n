import express, { Request, Response } from "express"
import { login } from "../controllers/controller.auth"
import { validatorUser } from "../middleware/auth"

const router = express.Router()


router.post("/login",login)
router.get("/me",(req:any,res:Response) =>{
    const user = req.user
    res.json({ok:true, user})
})

export default router