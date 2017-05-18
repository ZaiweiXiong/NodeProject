var request = require('superagent');
//var url='http://localhost:8084/data/version.json';
var server= "http://search.ca.com/"; 

module.exports=function testGetVersion(product,fn){

var product="'"+product+"'"; 
	//"'CA PPM SAAS DATA WAREHOUSE'";
	//"'"+req.params.product+"'";
var url = server+"_api/search/query?querytext="
+product+"&refiners='ProductVersions'&sourceid='835d7d71-c7fd-4a0d-aa82-d6aa489a0985'&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'";

console.log('search test for version!');

request.get(url)
.set('Accept', 'application/json;odata=verbose')
.set('content-type', 'application/json')
.end(function (err,res){ 

if (err){
	
	console.log('failed-> '+url);
	
	}else {
			
			var l = res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results;
			
			if(res.body&&Array.isArray(l)){
				console.log('return result...versions with product '+product);
				return fn(null,res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results);
				//res.body
			
			}
		    
		 }
	});
	
	
}