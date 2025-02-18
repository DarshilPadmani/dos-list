const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.send("This is the express server");
})

app.get('/hello', (req, res, next)=>{
    res.send("This is the second hello response");
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})