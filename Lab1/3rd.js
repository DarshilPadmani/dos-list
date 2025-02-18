const http = require("http")
const myserver = http.createServer((req, res) => {
    console.log(req.headers)
})

myserver.listen(8000, ()=>{
    console.log('server is running on port 8000')
})