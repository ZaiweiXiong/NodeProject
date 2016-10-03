var express = require('express');
var fs = require("fs");
var app = express();
app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
//InsertAndSelect page
app.get('/process_get', function (req, res) {
   // 输出 JSON 格式
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
   //var Obj =JSON.stringify(response);
   insertAndSelectDB(req.query.first_name,req.query.last_name);
   console.log(req.query.first_name,req.query.last_name);
   console.log('ok');
 })
//  del_user 页面响应
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('page is for deleting');
   var userName =req.query.first_name;
   deleteUser(userName);
})


  var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  
  console.log("应用实例，访问地址为 http://0.0.0.0:8081");

});

function insertAndSelectDB (a,b){
	
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
	//select to DB
	var jsondata= '{"total":28,"rows":';
	var t ='}';
    //var db = new sqlite3.Database('testDB');//db.each
	db.all("SELECT firstName ,lastName from user1", 
	function(err, row) {
    console.log(row);
	s=JSON.stringify(row);//fs.writeFile //fs.appendFile
	fs.writeFile('public/UIDemo/data/data.json',jsondata+s+t);
	
});

		db.close();
}

function deleteUser(a){
	
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
	var jsondata= '{"total":28,"rows":';
	var t ='}';
    //var db = new sqlite3.Database('testDB');//db.each
	db.all("SELECT firstName ,lastName from user1", 
	function(err, row) {
    console.log(row);
	s=JSON.stringify(row);//fs.writeFile //fs.appendFile
	fs.writeFile('public/UIDemo/data/data.json',jsondata+s+t);
	
});
	  db.close();
}

function selectALL(){
	
    var s="";
    var jsondata="";
    var i=0;
	var jsondata= '{"total":28,"rows":';
	var t ='}';
    var db = new sqlite3.Database('testDB');//db.each
	db.all("SELECT firstName ,lastName from user1", 
	function(err, row) {
    //console.log(row.firstName + ":" + row.lastName);
	console.log(row);
	s=JSON.stringify(row);//fs.writeFile //fs.appendFile
	fs.writeFile('public/UIDemo/data/data.json',jsondata+s+t);
	//i++;
});
	db.close();
}
function selectEach() {
	
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database('testDB');
	db.serialize(function() {
	db.each("SELECT firstName ,lastName from user1", function(err, row) {
    console.log(row.firstName + ": " + row.lastName);
	});
});
	  db.close();
}
function readfile() {
	
	fs.readFile('public/UIDemo/data/datagrid_data1.json', function (err, data) {
   if (err) {
       return console.error(err);
   }
	console.log("异步读取: " + data.toString());
});

}
function writeFile(data){
	
console.log("准备写入文件");//writeFile //appendFile //writeSync
var t=',';
fs.appendFile('public/UIDemo/data/testdata.json', data,  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("Successfully");
   console.log("--------我是分割线-------------")
   console.log("start reading!");
   fs.readFile('public/UIDemo/data/testdata.json', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString()+'\n');
   });
});
}

