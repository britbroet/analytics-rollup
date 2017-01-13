var express = require("express"); 
var bodyParser = require("body-parser"); //read post variables
var fs = require("fs"); //read from & write to files
var ejsLayouts = require("express-ejs-layouts"); 
var request = require("request"); //XMLHttp Requests (e.g., AJAX)
//require('dotenv').config();
//var flash = require('connect-flash');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);


app.get('/', function(req, res) {
  res.render('index');
});


var server = app.listen(process.env.PORT || 3000);

module.exports = server;