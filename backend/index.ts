import express, { json } from "express"
import { conectDB } from "./db/conect"
import routes from "./routes/index"
import cors from "cors"
import "dotenv/config"
import { multerErrorHandler } from "./middleware/handlerErrorMiddleware"
import cookieParser from "cookie-parser"



const app = express()
const port = process.env.PORT


conectDB()
app.use(cookieParser())
app.use(json())
app.use(cors({origin:"http://localhost:5173",credentials:true}))


app.use("/api",routes)
app.use(multerErrorHandler)

// ⚠️ No ejecutar este script otra vez. Usuario ya creado.
// main()
app.listen(port,() =>{
    console.log("Escuchando en http://localhost:"+port)
})
