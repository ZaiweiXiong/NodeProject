var express = require('express');
var engine  = require('ejs');
var search  = require('./search');
var testGetVersion  =     require('./testGetV');
var testGetUrl  =     require('./getUrl');
var app = express();

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.set('view options',{layout:false});
app.use(express.static('public'));


app.get("/",function(req,res){
	
  search(req.query.q,function(err,results){
	  
	  if(err) return next(err);
	  console.log('product of list results->'+results.length + " products");
     
	  var strs = JSON.stringify(results);
	  res.end('jsonpcallback('+'\n'+strs+'\n'+')');
	  
	});
});

app.get('/:product', function (req, res,next) {
	
   console.log("This is a post req");
   console.log('this params product is '+ req.params.product);
  
   console.log('ok....');
   
			/*
				testGetVersion(req.params.product,function(err,results){
				console.log('->versions..'+results.length);
				response=JSON.stringify(results);
				res.end('jsonpcallback('+'\n'+response+'\n'+')');
			
			});
			*/ 

				var response="";
			    var response_="";
				testGetUrl(req.params.product,function(err,results){
					
					for (var i=0;i<results.RefinementResults.Refiners.results.length;i++){
						var r = results.RefinementResults.Refiners.results[i];
						response+= JSON.stringify(r.Entries.results).replace("[","").replace("]",",");
					}
					
					
					var url = JSON.stringify(results.RelevantResults.Table.Rows.results[0].Cells.results[3].Value);
						response_+="{"+'"'+"RefinementValue"+'"'+":"+
						url
						+"}"+",";
						
					var items = response+response_.replace(/,([^,]*)$/,"");
					res.end('jsonpcallback(['+'\n'+items+'\n'+'])');
					
					/*
					for (var j=0;j<results.RelevantResults.Table.Rows.results.length;j++){
						
						
						var url = JSON.stringify(results.RelevantResults.Table.Rows.results[i].Cells.results[3].Value);
						response_+="{"+'"'+"RefinementValue"+'"'+":"+
						url
						+"}"+",";
					}
						
						var t = response+response_.replace(/,([^,]*)$/,"");
						res.end('jsonpcallback(['+'\n'+t+'\n'+'])');
					*/	
						
					});
			
				
});

var server = app.listen(8085, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("app server..... http://0.0.0.0:8085");
});


