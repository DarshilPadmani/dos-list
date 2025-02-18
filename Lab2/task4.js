const express = require('express');
const app = express();
const port = 3000;

var bodyParse = require("body-parser");
app.use(bodyParse.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/post1.html')
    });

app.get('/about', (req, res)=>{
    res.sendFile(__dirname+'/about.html')
    });

app.post('/submit', (req, res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;
    res.send("Welcome"+name)
})


app.listen(port, ()=>{
    console.log("Server is running on port 3000")
})



