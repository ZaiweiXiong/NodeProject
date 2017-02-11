var express = require('express');
var app = express();
var test = require('../test');


app.use(express.static('public'));

app.get('/', function (req, res) {
	
   res.sendFile(__dirname + '/' + "search.html");
   //res.end('123');
   //res.write('123');
   //res.render( 'search.html', { "Name":"123"} );
})

var server = app.listen(8083, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("api server..... http://0.0.0.0:8083");
});

