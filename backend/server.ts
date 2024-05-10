import express from "express"
// import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import appRouter from "./src/view/routes"

dotenv.config()

const PORT = process.env.PORT ?? ""
const uri = process.env.DATABASE_URL ?? ""
const isDev = process.env.NODE_ENV ?? ""

// DB connection
// if (uri !== "") {
//     mongoose
//         .connect(uri)
//         .then(() => {
//             console.log("DB connected!")
//         })
//         .catch(error => {
//             console.log(error)
//         })
// } else {
//     console.log("No URI to DB!")
// }

// Express instance Web Server
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: [...(isDev ? ["http://localhost:3000"] : [])],
    credentials: true
}))

app.use(appRouter)

app.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT} => url : http://localhost:${PORT}`)
})
