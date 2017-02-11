var request = require('superagent');

//var server= "http://search-stage.ca.com/";
var server= "http://search.ca.com/"; 
//var server ="http://search-qa.ca.com/";

/*
var product="'"+product+"'"; 
var url = server+"_api/search/query?querytext="
+product+
"&refiners='products'"+
"&sourceid='835d7d71-c7fd-4a0d-aa82-d6aa489a0985'"+
"&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'";
*/

var product="SaaS";		//CA View //SaaS //CA API Management SaaS
var bookshelves="bookshelves";
var wiki="wiki";
var url=server+"_api/search/query?enablefql=true"+
"&rowsperpage=10&selectproperties='title,confluenceurl'"+
"&refiners='typeofcontent,products,language,productversions'"+
"&refinementfilters='and(or(typeofcontent:"+wiki+", typeofcontent:"+bookshelves+"), products:"+product+")'"+
"&sourceid='8fdba11a-c566-4ec0-9b8d-48224cd6a0b2'"+
"&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'"

module.exports=function testGetUrl(product,fn){
	
//var product="'"+product+"'"; 
request.get(url)
.set('Accept', 'application/json;odata=verbose')
.set('content-type', 'application/json')
.end(function (err,res){ 

if (err){
	
	console.log('failed-> '+url);
	
	}else {
			
			
				return fn(null,res.body.d.query.PrimaryQueryResult);
				
			
		 }
	});
}

/*
				console.log('return result...versions with product '+
			    //JSON.stringify(res.body.d.query));
				//null,res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results
				//null,res.body.d.query.PrimaryQueryResult.RefinementResults
				//null,res.body.d.query.PrimaryQueryResult.RelevantResults
				//res.body.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results
				//res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results
				//res.body
				//JSON.stringify(res.body);
				//res.body.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results[0].Cells.results[3].Value
*/