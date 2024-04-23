const http = require("http")
const fs = require("fs")
const PORT = 8002
const IP_Add = '127.0.0.1'

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    const rs = fs.createReadStream(__dirname+"/index.html",'utf-8')
    rs.pipe(res)
}) 

server.listen(PORT,IP_Add)
console.log(`http://${IP_Add}:${PORT}`)