import express from "express"
import { upLoadFiles } from "../controllers/controller.upload"
import upLoad from "../middleware/multer"
// import { multerErrorHandler } from "../middleware/handlerErrorMiddleware"

const router = express.Router()

router.post("/", upLoad.array("images"),upLoadFiles)

// router.use(multerErrorHandler)

export default router