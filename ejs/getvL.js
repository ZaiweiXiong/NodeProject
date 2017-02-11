var fs = require('fs');
var request = require('superagent');
var server= "http://search.ca.com/"; 


//var temp="";
exports.getvl=function(req,res,product){
	
	console.log('getvl!');
	getV(req,res,product);
	//temp = getV(req,res,product);
	//return getV(req,res,product);
	//console.log("temp->"+temp.length);
}

function getV(req,res,product){
	
	var product="'"+req.params.product+"'"; 
	//"'CA PPM SAAS DATA WAREHOUSE'";//"'"+req.params.product+"'"; //"'EZ ARMOR AV'"
	//product = "'CA PPM'";  //"'"+req.params.product+"'";
	var url = server+"_api/search/query?querytext="
	+product+"&refiners='ProductVersions'&sourceid='835d7d71-c7fd-4a0d-aa82-d6aa489a0985'&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'";

request.get(url)
.set('Accept', 'application/json;odata=verbose')
.set('content-type', 'application/json')
.end(function (err,res)

{ 

if (err){
	
	console.log('failed-> '+url);
	
	}else {
		   l = res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results;
			//res.body
		   //temp=l;
		   console.log(' result...!'+l.length);
			for (var i=0;i<l.length;i++){
				
				console.log(res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results[i].RefinementValue);
			}
				
		}
			
			
		 
	});			
		
		//return temp;			
}
