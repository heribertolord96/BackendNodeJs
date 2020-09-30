const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  fs.readFile("./big", (err, data) => {
    if (err) {
      console.log("error", err);
    }

    res.end(data);
  });
});

server.listen(3000);
//cd BackendNodeJs-b1\Learning-node\arquitectura-node\node-web\streams  \file-server.js