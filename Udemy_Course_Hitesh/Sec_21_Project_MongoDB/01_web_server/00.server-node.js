const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hello ice tea")
    }else if (req.url === '/ice-tea') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Thanks for ordering ice tea, its really hot")
    }else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("404 Not Found");
    }
})

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`)
})