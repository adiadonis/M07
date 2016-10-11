var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();  // make express app
var server = require('http').createServer(app);
app.get('/', function (req, res) {
  res.send('Hello World!!!');
});


// set up the view engine
// manage our entries
app.set("view EJS", 'EJS');
// GETS
// POSTS
// 404

// Listen for an application request on port 8081
server.listen(8081, function () {
  console.log('Guestbook app listening on http://127.0.0.1:8081/');
});
