const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/post.html')
})

app.get('/about', (req, res)=>{
    res.send('darshil here')
})

app.listen(port, ()=>{
    console.log('rubb')
})