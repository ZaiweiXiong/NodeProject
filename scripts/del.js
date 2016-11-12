var fs = require('fs');
var child_process = require('child_process');
var folder='updated';
var folderpath='C:/mynode/'+folder;
var path='C:\\mynode\\'+folder;

var  command ='rd/s/q '+path;
console.log("command->"+command);
   
 var deletefolder = child_process.exec(command,function 
      (error, stdout, stderr) {
      
      if (error) {
         console.log(error.stack);
         console.log('Error code: '+error.code);
         console.log('Signal received: '+error.signal);
      }
     
	  var file_='C:/mynode/log/updatedfileName.txt';
	
   });

  deletefolder.on('exit', function (code) {
      console.log('Child process exited with exit code '+code);
   });