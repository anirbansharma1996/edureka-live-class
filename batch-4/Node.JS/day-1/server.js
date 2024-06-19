const http = require("http");
const fs = require('fs')

const server1 = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("server running on HOME");
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("server running on ABOUT");
  } else if (req.url == "/products") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("server running on PRODUCTS");
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("server running on HOME");
  }
});

// FOR HTML

const server2 = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, "success", { "Content-Type": "text/html" });
    const rf = fs.createReadStream(__dirname+'/index.html','utf8')
    rf.pipe(res)
  } else if (req.url == "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    const rf = fs.createReadStream(__dirname+"/about.html",'utf-8')
    rf.pipe(res)
  }else{
    res.writeHead(200, "success", { "Content-Type": "text/html" });
    const rf = fs.createReadStream(__dirname+'/404.html','utf8')
    rf.pipe(res)
  }
});

server2.listen(4000, () => {
  console.log("http://127.0.0.1:4000");
});
