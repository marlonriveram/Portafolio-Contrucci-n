import express from "express"
import { upLoadFiles } from "../controllers/controller.upload"
import upLoad from "../middleware/multer"
import { validatorUser } from "../middleware/auth"
// import { multerErrorHandler } from "../middleware/handlerErrorMiddleware"

const router = express.Router()

router.post("/",validatorUser(), upLoad.array("images"),upLoadFiles)

// router.use(multerErrorHandler)

export default router