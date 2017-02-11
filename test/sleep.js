var execSync = require('child_process').execSync;
var exec = require('child_process').exec;

exports.sleep = function(number) {
	
  var sleep ='ping 127.0.0.1 -n' +' '+number+' '+'-w 1000 > nul';
	
	console.log('loading in '+number +' seconds');
	execSync(sleep,function 
	
      (error, stdout, stderr) {
      
      if (error) {
         console.log(error.stack);
         }
		 console.log('close...'+number);
		});
		console.log('loading is done');
}