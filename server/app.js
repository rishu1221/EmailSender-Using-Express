const dotenv = require('dotenv')
dotenv.config()

const express = require("express")
const router = require("./routes/routes.js")

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api',router);

app.get("/",(req,res)=>{
    res.status(201).json("Server is running");
})



app.listen(3000)