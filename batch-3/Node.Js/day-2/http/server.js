const http = require('http')
//---
const fs = require('fs')


const server1 = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("hello this is my first server response")
})

server1.listen(8000,'127.0.0.1')
console.log('http://127.0.0.1:8000')


const server2 = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    const rs = fs.createReadStream(__dirname+"/data.txt","utf-8")
    rs.pipe(res) 
})

server2.listen(8001,'127.0.0.1')
console.log('http://127.0.0.1:8001')

