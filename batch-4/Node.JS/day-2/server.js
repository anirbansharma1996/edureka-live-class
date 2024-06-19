const http = require("http");
const PORT = 8080;
const database = require("./db.json");

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Handle preflight request for CORS
    res.writeHead(200);
    res.end();
  } else if (req.method === "GET" && req.url === "/api/v1/users") {
    // GET request to fetch all users
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(database));
  } else if (req.method === "POST" && req.url === "/api/v1/users") {
    // POST request to add a new user
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      // Add the new user to the database
      database.users.push(newUser);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newUser));
    });
  } else if (req.method === "DELETE" && req.url.startsWith("/api/v1/users/")) {
    // DELETE request to remove a user
    const userId = req.url.split("/")[4];
    const index = database.users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      const deletedUser = database.users.splice(index, 1)[0];
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(deletedUser));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("User not found");
    }
  } else if (req.method === "PATCH" && req.url.startsWith("/api/v1/users/")) {
    // PATCH request to update a user
    const userId = req.url.split("/")[4];
    const index = database.users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        const updatedUser = JSON.parse(body);
        database.users[index] = { ...database.users[index], ...updatedUser };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(database.users[index]));
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("User not found");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Something went wrong. Try again later.");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
