var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

require('./sockets/base')(io);

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('angular-client'));

server.listen(3000);
