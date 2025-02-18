const http = require('http');
const FS = require('fs')

const myserver = http.createServer((req, res)=>{
    const log = `${Date.now()}: New Req Received\n`;
    FS.appendFile('p1\\log.txt', log, (err)=>{
        if(err) {
            console.log("Error writing to a file", err);
        }
        res.end("Hello");
    });
});

myserver.listen(3000, ()=>{
    console.log("Server is runninh on port 3000");
})