const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('This app with express is loading in port 3000');
});