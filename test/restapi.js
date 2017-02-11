var fs = require('fs');
var Client = require('node-rest-client').Client;
var client = new Client();
var product="'APM'";//"'clarity'";
var server="http://search.ca.com/";//http://search-stage.ca.com/_
var url = server+"_api/search/query?querytext="
+product+"&refiners='products'&sourceid='835d7d71-c7fd-4a0d-aa82-d6aa489a0985'&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'";

testclient(url);

function testclient(url){
	
	var args = {
  
    headers: { 
	"accept": "application/json;odata=verbose",
    "content-type": "application/json"
 
	}
};
	
	client.get(url, args, function (data, response) {
	var str = JSON.stringify(data);
	
	console.log(str);
	//console.log(data);
	//var obj = JSON.parse(str.replace("d:",""));
	//obj.query.$
	
	//console.log(obj.query);
	writefile_appendFileSync(str,'123.txt');
	
});
	console.log('rest API test');
}

function writefile_appendFileSync(str,filename){

	var filename= filename;
	var string =str;
	
	fs.appendFileSync('./pdf/'+filename, string);
	console.log('done!');
}
//https://msdn.microsoft.com/en-us/library/office/jj164022.aspx