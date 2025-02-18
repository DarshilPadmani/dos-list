const http = require('http');
const FS = require('fs')

const server = http.createServer((req, res) => {
    const logEntry = `${now} - ${JSON.stringify(req.header)}\n`;

    FS.appendFile('p1\\log1.txt', logEntry, (err, data) => {
       switch(req, url){
        case '/': res.end("Home Page");
        break;
       } 
    });
});
