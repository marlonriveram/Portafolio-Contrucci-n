import express, { json } from "express"
import { conectDB } from "./db/conect"
import routes from "./routes/index"
import cors from "cors"
import "dotenv/config"
import { multerErrorHandler } from "./middleware/handlerErrorMiddleware"



const app = express()
const port = process.env.PORT

app.use(json())
app.use(cors())

conectDB()
app.use("/api",routes)
app.use(multerErrorHandler)


app.listen(port,() =>{
    console.log("Escuchando en http://localhost:"+port)
})