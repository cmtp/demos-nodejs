const http = require('http');
const fs = require('fs');

fs.readFile('./view-html/index.html', 'utf8',(err, data) => {
    if (err) throw err;
    http.createServer((req, res) => {
        res.writeHeader(200, 'text/html');
        res.write(data);
        res.end();
    }).listen(3000, '0.0.0.0', () => {
        console.log('load index into http://localhost:3000');
    });
});
