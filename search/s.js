var express = require('express');
var engine =    require('ejs');
var search =    require('./search');
var testGetVersion  =     require('./testGetV')
var testGetLanguages =    require('./testGetL')
var app = express();
var product_="";

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.set('view options',{layout:false});
app.use(express.static('public'));


app.get("/",function(req,res){
	
  search(req.query.q,function(err,results){
	  
	  if(err) return next(err);
	  res.render('index',{results:results});
	  console.log('product of list results->'+results.length + " products");
     
	  //var strs = JSON.stringify(results);
	   //res.end('jsonpcallback('+'\n'+strs+'\n'+')');
	  
	});
});

app.post('/:product', function (req, res,next) {
	
   console.log("This is a post req");
   console.log('this params product is '+ req.params.product);
  
   console.log('ok....');
		
		var reg = /^(?=.*\d.*\b)/;
	    var str = req.params.product;
		console.log("str->"+str);
		
		if(reg.test(str)){
				
			   
				str=product_;
				console.log('get language!'+str);
				testGetLanguages(str,function(err,resutls){
				console.log('->langauges..'+resutls.length);
				response=resutls;
				res.end(JSON.stringify(response));
			});
				
				
		}else{
			    product_=req.params.product;
			    testGetVersion(req.params.product,function(err,resutls){
				console.log('->versions..'+resutls.length);
				response=resutls;
				res.end(JSON.stringify(response));
			});
		}
		
});

var server = app.listen(8083, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("app server..... http://0.0.0.0:8083");
});