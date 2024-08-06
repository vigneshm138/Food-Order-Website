import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'





const app=express()
const port=3001

app.use(express.json())
app.use(cors())

connectDB()

app.use("/api/food",foodRouter)
app.use("/image",express.static("uploads"))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
 res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Running Successfully on http://localhost:${port}`)
})

