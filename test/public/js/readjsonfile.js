var fs = require('fs');
var readline = require('readline');
var path = require('path');
var exec = require('child_process').exec;
//C:\myapp\NodeProject\public\data
var path_doc = '../NodeProject/public/data/';//'../data/';
var file = 'data.json'//'data.json';//test.txt
var str = "";
var path_='./public/';

//readfileOnline(file);
exports.test = function(name,url) {
  console.log('this is test->'+' '+name +' ' +url);
  //readfileOnline(file);
}
exports.test_= function (req,res){
	
	 if(req.params.id=='zaiwei'){
		   //res.json({"message" : "Hello "+req.params.id});
		   //res.sendFile(path.join(__dirname+'123.html')); //__dirname
		   res.sendFile('123.html', { root:path_ });
	  }else{
		   res.status(404).send('404');
	  }
}

function readfileOnline(file){
   
  var rl = readline.createInterface({
  input: fs.createReadStream(path_doc+file)
});

rl.on('line', (line) => {
	
		//console.log('line...........'+i);
		str = line.toString().trim();
		if(str!="[" & str!="]"){
			
			if(str!=""){
				var str_ = str.replace(/,\s*$/,"");
				var obj = JSON.parse(str_); 
			    console.log('obj->'+obj.Name);
				i++;
			}
		}	
		//var obj = JSON.parse(str); 
		//console.log('Name->'+obj.Name);
		//console.log('URL->'+obj.URL);
		//console.log('Line from file str:'+i+'\r\n', str);		
	   // uses a regular expression:
		//The / mark the beginning and end of the regular expression
		//The , matches the comma
		//The \s means whitespace characters (space, tab, etc) and the * means 0 or more
		//The $ at the end signifies the end of the string
});
				
}
function test(){
	
	console.log('test page!');
}
