const express = require('express');
const app = express()

const myLogger = function (req, res, next){
    console.log(req.method, req.url)
    console.log("logged")
    next()
}

app.use(myLogger)
app.get('/', (req, res)=>{
    res.send("Darshil padmani")
})

app.listen(3000)