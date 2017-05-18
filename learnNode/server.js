var express = require('express');
var app = express();
var fs = require("fs");
var linklist = require('./linklist');
app.use(express.static('public'));


app.get('/', function (req, res) {
	
   //res.sendFile( __dirname + "/" + "index.htm" );
   res.redirect('./index.html');
   //res.end('0');

})

app.get('/links', function (req, res) {
	
   linklist(function (results){
	   
		console.log('product of list results->'+results.length + " links");
		var strs = JSON.stringify(results);
		res.end(strs);
   });
	   //res.end('1');
})

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/data/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8085, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("app server.....http://localhost:8085/", host, port)

})