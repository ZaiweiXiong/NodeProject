
var server ="http://localhost:8082"; 
//http://10.138.129.61:8082

$(document).ready(function(){
	
	
    var txt2=$("<select style="+"width:60%"+" "+"onchange="+"producttoVersion()"+" "+
	"id="+"products"+"></select>").text("product");
	$("#product").append(txt2); 
	
	var l1 = "#products";
	var temp ="product";
	
	
	var url_=server+"/data/products.json";
	testAjax(url_,l1,temp);
	
});

function producttoVersion(){
	
	var selectvalue = $( "#products" ).val();
	var url = "http://www.sina.com.cn";
	
	$("#result").empty();
	
	
	for (var i=1;i<=3;i++){
	
	var txt1 =$("<a href="+url+" "+"class="+"pa"+" "+"id="+"a"+i+"></a>").text(selectvalue+" "+i);
	$("#result").append(txt1); 
	
	var txt3 =$("<li "+" "+"id="+"li"+i+"></li>").text("Product: "+selectvalue+", ");
    $("#a"+i).after(txt3);
	
	
	var txt4 =$("<b "+" "+"id="+"version"+i+"></b>").text("Version: "+" "+i+".0 "+",  ");
    $("#li"+i).append(txt4); 
	
	var txt5 =$("<b "+" "+"id="+"type"+i+"></b>").text("Type: "+" wiki  "+",  ");
    $("#version"+i).append(txt5); 
	
	var txt6 =$("<b "+" "+"id="+"Language"+i+"></b>").text("Languae: "+" en  ");
    $("#type"+i).append(txt6); 
	
	}
			
}

/*
function producttoVersion(){
	
	
	//console.log('versions-> '+$('#versions').length);
	var v = $('#versions').length;
	if(v==0){
	var txt2=$("<select style="+"width:60%"+" "+"onchange="+"VersionToLanguage()"+" "+
	"id="+"versions"+"></select>").text("version");
    $("#version").append(txt2); 
	
	var l1 = "#versions";
	var temp ="version";
	
	var url_=server+"/data/version.json";
	testAjax(url_,l1,temp);
	
	var selectvalue = $( "#products" ).val();
    console.log('product is '+selectvalue);
	}else{
		console.log('version is existed!');
	}
	
	
	
    	
}
*/
function VersionToLanguage(){
	
	var Ls = $('#Languages').length;
	
	if(Ls==0){
		
	var txt2=$("<select style="+"width:60%"+" "+
	"id="+"Languages"+" "+"onchange="+"OnLanguage()"+"></select>").text("Language");  
	$("#Language").append(txt2); 
	
	var l1 ="#Languages";
	var temp="Language";
	
	var url_=server+"/data/language.json";
	testAjax(url_,l1,temp);
	
	
	var selectvalue = $( "#products" ).val();
    console.log('product is '+selectvalue);
	
	var version_ = $( "#versions" ).val();
    console.log('version is '+version_);
	}else {
		console.log("Languages are existed!");
	}
	
	
}

function OnLanguage(){
	
	window.location = "http://search.ca.com";
}

function testAjax(url_,l1,temp){
	
  $.ajax({
 
  type: "Get", 
  dataType: "json", //dataType: "application/json;odata=verbose",  
  url: url_,
  success:  function (data) {
	  
	         var txt1 = $("<option>Select a product</option>")
			 var txtv = $("<option>Select a versioin/Realse</option>")
			 var txtL = $("<option>Select a Language</option>")
			
			for (var i=0;i<data.length;i++){
				  
				  if(temp=="version"){
				  
				  var L= data[i].RefinementValue;
				  var txt = $("<option></option>").text(L);
				  $(l1).append(txtv,txt);  
				  
				 }else if (temp=="Language"){
					 
				  var L= data[i].Language;
				  var txt = $("<option></option>").text(L);
				  $(l1).append(txtL,txt); 
				  
				 }else if(temp=="product"){
				  var L= data[i].RefinementValue;
				  var txt = $("<option></option>").text(L);
				  $(l1).append(txt1,txt);
				 }
				  
				  
			}
			
		}		
   });	
}

$(document).ready(function(){
	
  $("#b1").click(function(){
	  
    $.ajax({
		
      url:"http://localhost:8082/data/test.xml",
      type: 'GET',
      dataType: 'xml',
      timeout: 1000,
      cache:false,
      error: function(xml){
		var d="d"+':'+"to";
        alert('error '+"d\:to");
      },
      success: function(xml){
        //建立一个代码片段
       //alert(xml);
	   var d="d"+':'+"to";
	   var c = $(xml).find("d").text();//.length;
	          //$(this).find("geo\\:lat").text();
	   alert(c);
	   //console.log('ok');
      }
    });
  });
});

$(document).ready(function(){
	
  $("#b2").click(function(){
	 $.ajax({
 
  type: "Get", 
  dataType: "json", //dataType: "application/json;odata=verbose",  
  url: "http://localhost:8082/data/products.json", //data.json
  
  success:  function (data) {
	      
	      alert(data.length);  
		  for (var i=0;i<data.length;i++){
			 console.log(data[i].RefinementValue); //RefinementValue
		  }	
		}		
   });	 
    
  });
});

$(document).ready(function(){
	
  $("#b3").click(function(){
	 
  $.ajax({
 
  type: "Get", 
  async: false,
  url: "http://localhost:8083/?callback",
  //"http://localhost:8083/data/Jsonpdata.txt?callback",
  //"http://155.35.87.158:8082/data/Jsonpdata.txt?callback",
  //  url: "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998"
  dataType: "jsonp",//dataType: "application/json;odata=verbose", 
  jsonp: "callback",  
  jsonpCallback:"jsonpcallback",
  
  success:  function (data) {
	      
	     //alert(data.length); 
		 // var str = JSON.stringify(data);
         // console.log(str); 
		 for (var i=0;i<data.length;i++){
			  console.log(data[i].RefinementValue); //RefinementValue
		 }
		  
		},
  error: function(){
                 alert('fail');
             }		
   });	 
    
  });
});

//http://www.jb51.net/article/92329.htm
//http://www.runoob.com/json/json-jsonp.html
//http://www.cnblogs.com/sunxucool/p/3433992.html
//http://www.cnblogs.com/lvmylife/p/5295538.html
