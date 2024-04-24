const http = require("http");
const fs = require("fs");
const PORT = 8008;
const IP = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const rs = fs.createReadStream(__dirname + "/index.html", "utf-8");
    rs.pipe(res);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const rs = fs.createReadStream(__dirname + "/about.html", "utf-8");
    rs.pipe(res);
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    const rs = fs.createReadStream(__dirname + "/error.html", "utf-8");
    rs.pipe(res);
  }
});

server.listen(PORT, IP);
console.log(`http://${IP}:${PORT}`);
