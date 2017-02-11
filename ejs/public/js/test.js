
var server ="http://localhost:8084";
//"http://155.35.87.158:8082/";

$(document).ready(function(){
	
  var txt2=$("<select style="+"width:100%"+" "+"onchange="+"producttoVersion()"+" "+
	"id="+"products"+"></select>").text("product");
	$("#product").append(txt2); 
	
	var l1 = "#products";
	var temp ="product";
	
	
	//var url_=server+"/data/products.json";
	//testAjax(url_,l1,temp);
	
  
});

function producttoVersion(){
	
	var v = $('#versions').length;
	
	if (v==0){
	var txt2=$("<select style="+"width:100%"+" "+"onchange="+"VersionToLanguage()"+" "+
	"id="+"versions"+"></select>").text("version");
    $("#version").append(txt2); 
	
	var l1 = "#versions";
	var temp ="version";
	
	var url_=server+"/data/version.json";
	testAjax(url_,l1,temp);
	
	var selectvalue = $( "#products" ).val();
    console.log('product is '+selectvalue);
	
	}
	else {
		console.log('version is existed');
	}
	
	
    	
}

function VersionToLanguage(){
	
	var Ls = $('#Languages').length;
	
	if(Ls==0){
	var txt2=$("<select style="+"width:100%"+" "+
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
	
	}else{
		console.log('Language is existed!');
		
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
				  
				  var L= data[i].version;
				  var txt = $("<option></option>").text(L);
				  $(l1).append(txtv,txt);  
				  
				 }else if (temp=="Language"){
					 
				  var L= data[i].Language;
				  var txt = $("<option></option>").text(L);
				  $(l1).append(txtL,txt); 
				  
				 }else if(temp=="product"){
				  //var L= data[i].product;
				  var L= data[i].RefinementValue;
				  var txt = $("<option></option>").text(L);
				  $(l1).append(txt1,txt);
				 }
				  
				  
			}
			
		}		
   });	
}
