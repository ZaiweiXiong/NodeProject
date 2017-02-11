var express = require('express');
var request = require('superagent');

var server= "http://search.ca.com/"; 
var product="'CA PPM SAAS DATA WAREHOUSE'";//"'*'"; //"'clarity'"
var url = server+"_api/search/query?querytext="
+product+"&refiners='products'&sourceid='835d7d71-c7fd-4a0d-aa82-d6aa489a0985'&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'";

//var url='http://localhost:8084/data/products.json';

module.exports=function search(query,fn){
	
console.log('search test!');
//.set('Accept', 'application/json;odata=verbose')
//.set('content-type', 'application/json').
request.get(url)
.set('Accept', 'application/json;odata=verbose')
.set('content-type', 'application/json')
.end(function (err,res){ 

if (err){
	
	console.log('failed-> '+url);
	
	}else {
			
			var l = res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results;
			//res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results
			//res.body
			if(res.body&&Array.isArray(l)){
				console.log('return result...from products!');
				return fn(null,res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results);
				//res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results
				//res.body
			
			}
		    
		 }
	});
	
}
