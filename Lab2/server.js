const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
})

app.listen(port, ()=>{
    console.log("Server is running on port 3000")
})