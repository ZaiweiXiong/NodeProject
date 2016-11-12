var fs = require('fs');
var child_process = require('child_process');

var command_ ='git branch >C:/mynode/log/commitID.txt';   
var file ='C:/mynode/log/commitID.txt';
var folder='updated';
var folderpath='C:/mynode/'+folder;
var path='C:/mynode/'+folder;;



	var worker = child_process.exec(command_,function 
      (error, stdout, stderr) {
      
      if (error) {
         console.log(error.stack);
         console.log('Error code: '+error.code);
         console.log('Signal received: '+error.signal);
      }
      //console.log('stdout: ' + stdout);
      //console.log('stderr: ' + stderr);
		getCmid(file);
	  
   });

   worker.on('exit', function (code) {
      console.log('Child process exited with exit code '+code);
   });
   

function getCmid(file){
	
	   fs.readFile(file, function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log(": " + data.toString());
   var str =data.toString().split(" ");
   console.log("str[4] " + str[4].replace(")","").trim());
   getUpdateFileNames(str[4].replace(")"," ").trim());
   
});

   }

function getUpdateFileNames(cmid){
	
var  command ='git diff-tree --no-commit-id --name-only -r '+
      cmid+' >C:/mynode/log/updatedfileName.txt';
 console.log("command->"+command);
   
 var workerProcess = child_process.exec(command,function 
      (error, stdout, stderr) {
      
      if (error) {
         console.log(error.stack);
         console.log('Error code: '+error.code);
         console.log('Signal received: '+error.signal);
      }
      //console.log('stdout: ' + stdout);
      //console.log('stderr: ' + stderr);
	  var file_='C:/mynode/log/updatedfileName.txt';
	  getFileName (file_);
   });

   workerProcess.on('exit', function (code) {
      console.log('Child process exited with exit code '+code);
   });
}

function getFileName (file) {
	createfolder(folderpath);
	var s = "chapter1.mdchapter2.mdcompany.md";
	fs.readFile(file, function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("file->"+ data.toString());
   var str =data.toString().split(/\s+/);
   console.log("str[].length " + str.length);
   var fn ='C:/mynode/log/fileNames.txt';
   for (var i=0;i<str.length;i++) {
	   if(str[i].trim()!=""){
		    console.log("str[]"+ str[i].trim());
			fs.appendFileSync(fn, str[i].trim()+'\r\n');
			copyfilestofolder(str[i].trim());
	   }
	  
   }
 
});
}

function createfolder(folderpath){
	fs.mkdir(folderpath);
}

function copyfilestofolder(fileName){
	
var folderpath_ ='copy C:\\Users\\xioza01\\.jenkins\\workspace\\test\\doc\\';
var copy  = folderpath_+fileName+" "+'C:\\mynode\\updated\\'

   
 var copyfile = child_process.exec(copy,function 
      (error, stdout, stderr) {
      
      if (error) {
         console.log(error.stack);
         console.log('Error code: '+error.code);
         console.log('Signal received: '+error.signal);
      }
     
	  var file_='C:/mynode/log/updatedfileName.txt';
	
   });

	copyfile.on('exit', function (code) {
      console.log('Child process exited with exit code '+code);
   });
	
}

   
