var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.get('/', (req, res) => {
    res.render('index', {tit: 'Hola Drupaleros', saludo: 'este deberia ser un saludo..'});
});
app.listen(3000);