var fs = require('fs');
var url="http://155.35.87.158:8082/list";
var Client = require('node-rest-client').Client;
var client = new Client();

exports.secure=function(req,res){
	
	if (req.params.id=='order'){
		
		 res.sendFile( __dirname + '/test/' + "basictree.html" );
		 //BasicTabs.html
		 //basictree.html
		 
	}else if(req.params.id=='search'){
		
		//testjsonMethod(url,res,req);
		testFun(res,req); 
	}else if(req.params.id=='HomePage'){
		
		//testjsonMethod(url,res,req);
		testHomePage(res,req);
		
	}else if(req.params.id=='HP'){
		
		//testjsonMethod(url,res,req);
		testHP(res,req);
		
	}
	else{
		  res.status(404).send('404 page is not find!');
		}
}

function testjsonMethod(url,res,req){
	
	client.registerMethod("jsonMethod", url, "GET");
 
	client.methods.jsonMethod(function (data, response) {
    var name="";
	var link="";
	obj = JSON.parse(data);
	for (var i=0;i<obj.length;i++){
		
		  //console.log('data->'+obj[i].Name);
		  //console.log('data->'+obj[i].URL);
		  name+=obj[i].Name+"->";
		  link+=obj[i].URL;
		  //res.send(obj[i].URL);
	}
		  res.redirect("http://www.ca.com")
});
          
   }
   
function testFun(res,req){
	//test.xml
	//"data.json
	//search.html
	//res.send("testfun!");
	//res.send('search');
	res.sendFile( __dirname + '/test/' + "search.html" );
	//console.log('testfun!');
	//res.render(__dirname + '/test/' + "search.html");
}
function testHomePage(res,req){
	res.sendFile( __dirname + '/search/' + "homepage-start.html" );
}
function testHP(res,req){
	
	//res.sendFile( __dirname + '/search/' + "homepage-start.html" );
	var i="123";
	console.log(i);
	res.redirect("http://localhost:8082/HP");
	return res.i;
}

//https://msdn.microsoft.com/en-us/library/office/jj163876.aspx