import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import noteRoutes from './routes/note.route.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 4000
//Database connection Code
try{
    mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected successfully")
}catch(error){
    console.log("Error connecting to mongoDB", error)
}

//Routing Middleware
app.use(express.json())
app.use("/api/v1/noteapp", noteRoutes)

app.listen(port, () => {
  console.log(`Server is running on  ${port}`)
})
