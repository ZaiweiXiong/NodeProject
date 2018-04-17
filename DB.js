function DB () {
	
	this.insertToDB = function (a,b,c,d,e,f,res){
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('testDB');
	//insert to DB
	db.serialize(function() {
	var stmt = db.prepare("INSERT into guest VALUES (?,?,?,?,?,?)");
	var n = a;
	var n1 = b;

	stmt.run(n,n1,c,d,e,f);
	stmt.finalize();
	});

	res.redirect('./Home.html');
   }

	this.insertToRoom = function (roomNo,hotelNo,hotelName,price,checkIntime,guestNo,type,res){

		 var sqlite3 = require('sqlite3').verbose();
    	 var db = new sqlite3.Database('testDB');

    	 db.serialize(function() {

		 var stmt = db.prepare("INSERT into room VALUES (?,?,?,?,?,?,?)");
	   
		 	stmt.run(roomNo,hotelNo,hotelName,price,checkIntime,guestNo,type);
		    
		 	stmt.finalize();
		});

    	 res.redirect('./register.html');
	}
	
	this.deleteUser = function (a,b,res) {
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database('testDB');
	var _userName = a;
	var _tableName= b;

    if (_tableName==='room'){

    	var dbsql="DELETE from "+_tableName+" where guestNo ="+"'"+_userName+"'";
    	db.serialize(function() {
		db.run(dbsql);
		console.log('Deleted! guest from room '+_userName);
		res.redirect('./UserTable.html');
		});

		return;
    }

		var dbsql="DELETE from "+_tableName+" where guestNo ="+"'"+_userName+"'";
		//delete user
		db.serialize(function() {
		db.run(dbsql);
		console.log('Deleted! guest from guest'+_userName);
		});
	
		res.redirect('./UserTable.html');
}
	

   this.selectOne = function (user,table,res,req) {
		
   var sqlite3 = require('sqlite3').verbose();
   var db = new sqlite3.Database('testDB');
   var _userName = user;
   var _table= table;
   var dbsql="select * from guest where guestNo ="+"'"+_userName+"'";

   db.get(dbsql, function(err, row) {
			
			if (row==null) {
				
				console.log('error');
				res.send({a:'not found',b:"name"});
				process.on('uncaughtException', function (err) {
				console.log('not found user!' +err);
			
				});
				
			}
			   res.send({a:row.guestName,b:row.guestNo});	
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
				res.send({a:row.firstName,b:row.lastName});	
				
		
		});
	}
}

module.exports = DB;


