var fs = require('fs');
var Client = require('node-rest-client').Client;
 
var client = new Client();

//var url="http://155.35.87.158:8082/list";
//"https://www.google.com.au/webhp?gws_rd=ssl#q="+"test";

var product="'APM'";//"'clarity'";
var server="http://Search.ca.com/";
//"http://search-stage.ca.com/";//http://Search.ca.com/
var url = server+"_api/search/query?querytext="
+product+"&refiners='products'&sourceid='835d7d71-c7fd-4a0d-aa82-d6aa489a0985'&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'";

//http://Search.ca.com/_api/search/query?querytext='CA Datacom DL1 Transparency'&refiners='Language'&sourceid='835d7d71-c7fd-4a0d-aa82-d6aa489a0985'&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'


var args = {
    data: { test: "hello" },
    headers: { "Content-Type": "application/json" }
};

//readfile();
testclient(url);
//testjsonMethod(url);


function testclient(url){
	
	client.get(url, args, function (data, response) {
		
    // parsed response body as js object 
	//obj = JSON.parse(data);
	//var str = JSON.stringify(data);
    
	//var obj = JSON.parse(str);
	//var str = JSON.stringify(data);
	//console.log(str);
	var str = JSON.stringify(data);
	console.log(data);
	//writefile_appendFileSync(str,'123.txt');
    // raw response 
    //console.log(response.text);
});
	console.log('it is test for node rest client!');
}

function testjsonMethod(url){
	
	client.registerMethod("jsonMethod", url, "GET");
 
	client.methods.jsonMethod(function (data, response) {
    // parsed response body as js object 
	//obj = JSON.parse(data);
	//console.log(data);
    // raw response 
    //console.log(response);
	//writefile_appendFileSync(response,'123.txt');
});
	
}

function writefile_appendFileSync(str,filename){

	var filename= filename;
	var string =str;
	
	fs.appendFileSync('./pdf/'+filename, string);
	console.log('done!');
}
var temp="d:RefinementValue";//d:RefinementValue //d:element
function readfile(){
	
		//employees.json
		//jsont.json
		//xn.json
		//var obj_ = eval ("(" + element + ")");
		
	   fs.readFile( "pdf/" + "jsont.json", 'utf8', function (err, data) {
	   
	   //var obj = JSON.parse(data);
	   //console.log(data);
	   var obj = JSON.parse(data.replace("d:","").replace("d:","").replace("d:","").replace("d:",""));
	   //var obj_xmlns= JSON.parse(obj.query.$.replace("d:",""));
	   
	   console.log(obj.query.PrimaryQueryResult);
	   var str = JSON.stringify(obj.query.PrimaryQueryResult)
	   //console.log(str);
       //res.end( data );
	   });
}


//https://www.npmjs.com/package/node-rest-client
//http://www.cnblogs.com/jianyus/p/3321081.html
//http://Search.ca.com/_api/search/query?querytext='CA Datacom DL1 Transparency'&refiners='Language'&sourceid='835d7d71-c7fd-4a0d-aa82-d6aa489a0985'&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'
//https://github.com/racker/node-elementtree
//http://www.utilities-online.info/xmltojson/#.WIL6OVN97IU
//http://www.bejson.com/
//http://www.utilities-online.info/xmltojson/#.WIL6OVN97IU
//http://blog.csdn.net/abrahamcheng/article/details/8470834
