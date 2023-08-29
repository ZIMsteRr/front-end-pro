const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    if (req.url === '/about') {
        res.end(`
            <div><a href="/">Home</a></div>
            <div><a href="/about">About</a></div>
            <h1>About page</h1>
            `
        );
    } else {
        res.end(`
        `)
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});