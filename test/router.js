var express = require('express');
var app = express();
var test = require('../test');
var superAgent = require('./superAgent');
var sleep = require('./sleep');

app.use(express.static('public'));

app.use("/:id",function(req,res){
	
  sleep.sleep(3);
  test.secure(req,res);
  
});


var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("app server..... http://0.0.0.0:8082");
});