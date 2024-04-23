const http = require('http')
//---
const fs = require('fs')


// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"})
//     res.end("hello this is my first server response")
// })

// server.listen(8000,'127.0.0.1')
// console.log('http://127.0.0.1:8000')


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    const rs = fs.createReadStream(__dirname+"/data.txt","utf-8")
    rs.pipe(res) 
})

server.listen(8001,'127.0.0.1')
console.log('http://127.0.0.1:8001')

