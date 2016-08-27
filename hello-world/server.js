var http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Drupal!');
});

server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}/`);
});