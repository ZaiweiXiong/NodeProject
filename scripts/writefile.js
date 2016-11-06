var fs = require("fs");
var filename= 'input.txt';
var string ='it is '+' test ';

for (var i=1;i<10;i++){
	
	fs.appendFileSync(filename, string+''+i+'\r\n');
	
}
		console.log('done!');
