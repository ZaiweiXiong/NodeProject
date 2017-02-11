var fs = require('fs');
var request = require('superagent');
var product="'*'";
//clarity //CA PPM SAAS DATA WAREHOUSE'
var server= "http://search-stage.ca.com/";
var url = server+
"_api/search/query?querytext="
+product+
"&refiners='products,ProductVersions,Language'"+
"&sourceid='835d7d71-c7fd-4a0d-aa82-d6aa489a0985'"+
"&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'";


//writefile('./public/data/'+'products.json','')
getDatasbySearchAPI(url);

function getDatasbySearchAPI(url){
	
request.get(url)
.set('Accept', 'application/json;odata=verbose')
.set('content-type', 'application/json')
.end(function (err,res){ 

if (err){
	
	console.log('failed-> '+url);
	
	}else {
			console.log('start to get datas...');
			var str = JSON.stringify(res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results);
			console.log(res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results.length);
			
		 }
	});
}

function writefile_appendFileSync(str,filename){
	
	var filename= filename;
	var string =str;
	fs.appendFileSync('./public/data/'+filename, string);
}
function writefile(filename,str){
	
  fs.writeFile(filename, str,  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("successfully！");
   console.log("---------------------")
  
});
}

//writefile_appendFileSync(str,'version.json');
			//writefile_appendFileSync(str,'products.json');
			//console.log('ok done!');
			
			/*
			test code
			//res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results[1].RefinementValue;
			//console.log(res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results[1].RefinementValue); 
			//var ProductName=res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results[1].RefinementValue;
			//var productNames = res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results.length;
			//console.log(res.body.d.query.PrimaryQueryResult.RefinementResults.Refiners.results[0].Entries.results);
			*/

/*
			//"http://search-stage.ca.com/";
			//http://Search.ca.com/
//var url = "http://search-stage.ca.com/_api/search/query?querytext='APM'&refiners='products'&sourceid='835d7d71-c7fd-4a0d-aa82-d6aa489a0985'&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'";
//'products,ProductVersions,Language

*/