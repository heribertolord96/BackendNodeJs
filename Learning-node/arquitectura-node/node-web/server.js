const http = require("http");
const server = http.createServer();

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader("ContentType", "text/plain");

    res.end("hello world \n");
});

server.listen(8000);
console.log("Server en la url localhost:8000");