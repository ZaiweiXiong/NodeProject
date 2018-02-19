var express = require('express');
var fs = require("fs");
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  
   res.redirect('./read.html');
   console.log('ok');
})
app.get('/process_insert', function (req, res) {
	// Êä³ö JSON ¸ñÊ½
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   insertAndSelectDB(req.query.first_name,req.query.last_name,res);

 })
app.get('/process_get', function (req, res) {
 
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   //console.log(response);
   //console.log(req.query.first_name,req.query.last_name);
   console.log('ok select all');
   
   var sqlite3 = require('sqlite3').verbose();
   var db = new sqlite3.Database('testDB');//db.each
   db.all("SELECT firstName ,lastName from user1", 
   function(err, row) {
   res.send(JSON.stringify(row));
   });
   
	db.close();
	//res.send(JSON.stringify(
   //[{ "name":"John", "age":31, "city":"New York"},{"name":"Daivd", "age":31, "city":"New York"}]));
 })
 
 app.get('/del_user', function (req, res) {
	 
   console.log("/del_user DELETE ");
   var userName =req.query.first_name;
   console.log('it is '+req.query.first_name);
   deleteUser(userName,res);
  

})
 
 function insertAndSelectDB (a,b,res){
	
	var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('testDB');
	//insert to DB
	db.serialize(function() {
	var stmt = db.prepare("INSERT into user1 VALUES (?,?)");
	var n = a;
	var n1 = b;
	stmt.run(n,n1);
	stmt.finalize();
});
	res.redirect('./read.html');

}

function deleteUser(a,res){
	
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database('testDB');
	var _userName = a;
	var dbsql="DELETE from user1 where firstName ="+"'"+_userName+"'";
	//delete user
	db.serialize(function() {
	db.run(dbsql);
	console.log('Deleted!'+_userName);
});

	//select to DB
	res.redirect('./read.html');
	
}

 
  var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port
  
  console.log("IP address http://0.0.0.0:8082");

});