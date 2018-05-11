var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var path = require('path');

dotenv.config();

var PORT = 8080;

var app = express();

//view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.bodyParser({ extended: true }));
app.use(expressValidator());

app.use(router);
app.listen(PORT, function() {
  console.log('listening on ' + PORT);
});