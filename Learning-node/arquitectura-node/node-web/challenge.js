const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
    res.statusCode = 200;
    if (req.method === "POST" && req.url == "/challenge") {
        let body = [];

        req.on("data", chunk => {
                body.push(chunk);
            })
            .on("end", () => {
                res.writeHead(200, { "Content-Type": "text/plain" });
                body = Buffer.concat(body).toString();

                try {
                    let fechaCumple = new Date(body);
                    let diaCumple = (fechaCumple.getDate() + 1);
                    res.end('Tu dia de nacimiento es el :' + diaCumple.toString());
                } catch (err) {
                    res.end('Error', err);
                }
                res.end(body);
            });
    } else {
        res.statusCode = 404;
        res.end();
    }
    /* res.setHeader("ContentType", "text/plain");
    res.end("hello world \n"); */
});

server.listen(8001);
console.log("Server en la url localhost:8001");