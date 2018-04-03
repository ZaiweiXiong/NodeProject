var express = require('express');
var DB = require('./DB');
var session = require('express-session');
var app = express();

app.use(session({
    secret: 'hubwiz app',
    cookie: {maxAge: 60 * 1000 * 30}
}));
app.use(express.static('public'));

var D = new DB();
var user;

app.get('/', function (req, res) {
  
    console.log('ok..'+req.session.userName);
 
	if (req.session.userName!=null) {
	   
	   res.redirect('./read.html');
   }else {
	   
	   res.redirect('./login.html');
   }
})

app.get('/process_insert', function (req, res) {
	
   // outPout JSON format
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
		console.log(response);
		D.insertToDB(req.query.first_name,req.query.last_name,res)

})

app.get('/process_get', function (req, res) {
 
  
    if (req.session.userName!=null){
		 
		 console.log('ok select all with user '+req.session.userName);
		 var sqlite3 = require('sqlite3').verbose();
         var db = new sqlite3.Database('testDB');//db.each
         db.all("SELECT firstName ,lastName from user1", 
	     function(err, row) {
			 
			    if (row!=null){
						res.send(JSON.stringify(row));
						console.log(err+" "+user);
				}else{
					//console.log(err+" "+user);
				}
			
				
		});
   
		db.close();
		
	}
	
	else {
		
		  console.log('it is not found user  '+req.session.userName);
		  res.redirect('./login.html');
	}
  
 })
 
 app.get('/del_user', function (req, res) {
	 
   console.log("/del_user DELETE ");
   var userName =req.query.first_name;
   console.log('it is '+req.query.first_name);
   D.deleteUser(userName,res);

})

app.get('/process_findOne:id', function (req, res) {
	 
    console.log("/process_findOne:id ");
    var userName =req.params.id;
    console.log('it is '+req.params.id);
	D.selectOne (req.params.id,res,req);
	
})

app.get('/isExits:id', function (req, res) {
	 
    console.log("/isExits:id ");
    req.session.userName =req.params.id;
	user =req.session.userName;
    console.log('login user is '+ req.session.userName);
	D.selectOne (req.params.id,res,req);
})

app.get('/logOut', function (req, res) {
	 
   
	res.send({a:req.session.userName,b:"name"});
	
    console.log('logOut...'+req.session.userName);	
	
	req.session.destroy();
})

app.get('/logIn', function (req, res) {
	
	res.send({a:req.session.userName,b:"name"});
    console.log('login...xx '+req.session.userName);	
})


  var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port
  
  console.log("IP address http://0.0.0.0:8082");

});