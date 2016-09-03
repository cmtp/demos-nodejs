var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express();

//------- database initialization
require('mongoose').Promise = require('q').Promise;
mongoose.connect('mongodb://localhost:27017/rest-drupal');

//------- setting express middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

//------- importing models
var Users = require('./models/user.js')

//routes
app.use(require('./routes/users.js'))


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});