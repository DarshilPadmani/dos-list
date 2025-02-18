const http = require('http');
const FS = require('fs')

const myserver = http.createServer((req, res)=>{
    console.log(req.headers);

    const now = new Date().toLocaleDateString("en-US", {timeZone: "Asia/kolkata"});
    const logEntry = `${now} - ${JSON.stringify(req.headers)}\n`

    FS.appendFile('p1\\log.txt', logEntry,(err,data)=>{
        if(err) {
            console.log(err);
        }
        else{
            FS.readFile('p1\\log.txt', 'utf-8', (err, data)=>{
                if(err) {
                    console.log('Error readin log file',err);
                }
                else{
                    console.log('Log File Content ', data);
                }
            });
        }
    });
    

    res.write("Hello");
    res.end();
});

myserver.listen(3000, ()=>{
    console.log("Server is runninh on port 3000");
})