function DB () {
	
	this.insertToDB = function (a,b,res){
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
	res.redirect('./Home.html');
	}
	
	this.deleteUser = function (a,res) {
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database('testDB');
	var _userName = a;
	var dbsql="DELETE from user1 where firstName ="+"'"+_userName+"'";
	//delete user
	db.serialize(function() {
	db.run(dbsql);
	console.log('Deleted!'+_userName);
	});
	
	res.redirect('./UserTable.html');
	}
	

   this.selectOne = function (user,res,req) {
		
   var sqlite3 = require('sqlite3').verbose();
   var db = new sqlite3.Database('testDB');
   var _userName = user;
   var dbsql="select * from user1 where firstName ="+"'"+_userName+"'";
   db.get(dbsql, function(err, row) {
			
			if (row==null) {
				
				console.log('error');
				res.send({a:'not found',b:"name"});
				process.on('uncaughtException', function (err) {
				console.log('not found user!' +err);
			
				});
				
			}
			   res.send({a:row.firstName,b:"name"});	
		});
		
		
	}
	this.getOne = function (user,res,req) {
		// test code
		var sqlite3 = require('sqlite3').verbose();
		var db = new sqlite3.Database('testDB');
		var _userName = user;
		var dbsql="select * from user1 where firstName ="+"'"+_userName+"'";
		db.get(dbsql,function (err, row){
			
			if (err){
				
				res.send({a:'not found',b:"name"});
				process.on('uncaughtException', function (err) {
				console.log('not found user!' +err);
				
				
				});
			
			}
				res.send({a:row.firstName,b:"name"});	
				
		
		});
	}
}

module.exports = DB;


