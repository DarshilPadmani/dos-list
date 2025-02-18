
const express = require("express");
const app = express()

app.use("/", (req, res, next)=>{
    res.send("Server from Express")
})

app.get("/hello", (req, res, next)=>{
    res.send("Hello from Express")
})

app.listen(3000, ()=>{
    console.log("Server is Running")
})