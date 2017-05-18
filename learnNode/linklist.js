var express = require('express');
var fs = require('fs');

module.exports=function linklist(fn){
		
    var objs = JSON.parse(fs.readFileSync('./public/data/data.json', 'utf8'));
    return fn(objs);

	
}
	
/*
var fs = require('fs');
var obj;
fs.readFile('file', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});
*/
