var fs = require("fs");
var readline = require('readline');

// 异步读取
fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log(": " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("syn: "+'\r\n' + data.toString());

//console.log("done!");

var rl = readline.createInterface({
  input: fs.createReadStream('input.txt')
});
var i=1;
var str = "";
var url ="http://www.google.com";
rl.on('line', (line) => {
	
	if (i==1){
		str = line;
		console.log('Line from file str:'+i+'\r\n', str);
		testfun(str);
		}
	i++;
});
function testfun(data){
	//console.log("str->"+"{"+'"name"'+":"+'"'+str+'"'+","+'"URL"'+":"+'"'+url+'"'+"}");
	var temp = "{"+'"name"'+":"+'"'+data+'"'+","+'"URL"'+":"+'"'+url+'"'+"}";
	console.log(temp);
	var obj = JSON.parse(temp);
	console.log('user name->'+obj.URL);
}
//git ls-remote --heads origin
//git rev-parse HEAD
//git branch >c:\log.txt
//

