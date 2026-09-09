var http = require("http") //if import fails, stop, otherwise continue
http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    })
    response.end("The server is now running successfully and listening")
}).listen(8088)