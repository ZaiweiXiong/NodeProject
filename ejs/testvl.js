var fs = require('fs');
var request = require('superagent');
//var testG   =    require('./testG')
//var temp = "";
var temp_= "";

exports.testvl=function (req,res,product){
	    
		var reg = /^(?=.*\d.*\b)/;
	    var str = req.params.product;
		
		if(reg.test(str)){
			
			console.log('yes');
		    console.log('str1->'+product);
		    temp_ = getL(req,res);
			return temp_;
			
		}else {
			
				//getV(req,res,product);
			
			
			}
		 	
}

function getV(req,res,product){

var url='http://localhost:8084/data/version.json';
request.get(url)
.set('Accept', 'application/json;odata=verbose')
.set('content-type', 'application/json')
.end(function (err,res)

{ 

if (err){
	
	console.log('failed-> '+url);
	
	}else {
			if(res.body&&Array.isArray(res.body)) {
				console.log('return result...from v!');
				console.log(res.body.length);
				console.log(url+" "+product);
				var temp=res.body;
				//console.log("temp->"+res.body);
				test.testGettemp(temp);
				//return res.body;
				
			}
			
			
		 }
	});			
				//return temp;
}



function getL(req,res){
	
var url_= 'http://localhost:8084/data/language.json';
request.get(url_)
.set('Accept', 'application/json;odata=verbose')
.set('content-type', 'application/json')
.end(function (err,res){ 
 if (err){
	
	console.log('failed-> '+url_);
	
	}else {
	console.log('successfully-> '+req.params.product);
		//L= req.params.product;
		if(res.body&&Array.isArray(res.body)){
			console.log(res.body.length);
			console.log(res.body);
			temp_=res.body
		}
	}

});
			return temp_;
}