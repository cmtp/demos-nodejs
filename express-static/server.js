var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.render('index');
    res.send('Hola Mundo');
});

app.listen(3000);