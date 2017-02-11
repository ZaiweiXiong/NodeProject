
$(document).ready(function(){
	
//producttoVersion()
var txt2=$("<select style="+"width:60%"+" "+"onchange="+"producttoURL()"+" "+
"id="+"products"+"></select>").text("product");
$("#product").append(txt2); 
	
	var l1 = "#products";
	var temp ="product";
	
  $.ajax({
 
  type: "Get", 
  async: false,
  url: "http://localhost:8085/?callback",
  dataType: "jsonp",//dataType: "application/json;odata=verbose", 
  jsonp: "callback",  
  jsonpCallback:"jsonpcallback",
  
  success:  function (data) {
	     
		 var txtp = $("<option>Select a product....</option>")
		 console.log(data.length); 
		 
		 for (var i=0;i<data.length;i++){
			 
			 
			  var p= data[i].RefinementValue;
			  var txt = $("<option></option>").text(p);
			  $(l1).append(txtp,txt);  
		 }
		  
 },
  error: function(){
                 alert('fail');
             }		
   });	 
	
  
});

/*
function producttoVersion(){
	
var selectvalue = $( "#products" ).val();
alert('product is '+selectvalue);

 var l1 = "#products";
 
 $.ajax({
 
  type: "Get", 
  async: false,
  url: "http://localhost:8085/"+selectvalue+"?callback",
  dataType: "jsonp",//dataType: "application/json;odata=verbose", 
  jsonp: "callback",  
  jsonpCallback:"jsonpcallback",
  
  success:  function (data) {
	     
		 var txtp = $("<option>Select a product....</option>")
		 
		 $(l1).empty();
		 console.log("products->"+data.length); 
		 
		 for (var i=0;i<data.length;i++){
			 
			  var p= data[i].RefinementValue;
			  var txt = $("<option></option>").text(p);
			  $(l1).append(txtp,txt);  
		 }
		  
 },
  error: function(){
                 alert('fail');
             }		
   });	 
	
}
*/
function producttoURL(){
	
   var selectvalue = $( "#products" ).val();
   alert('product is from producttoURL->'+selectvalue);
	
	var txt2=$("<a href="+"url"+" "+"id="+"urls"+"></a>").text("testurl");
	$("#testurl").append(txt2); 
	
  $.ajax({
 
  type: "Get", 
  async: false,
  url: "http://localhost:8085/"+selectvalue+"?callback",
  dataType: "jsonp",//dataType: "application/json;odata=verbose", 
  jsonp: "callback",  
  jsonpCallback:"jsonpcallback",
  
  success:  function (data) {
		 
	     alert(data.length);
		 /*
		 for (var i=0;i<data.length;i++){
			  var txt = $("<li></li>").text(data[i].RefinementValue);
			  $("#url").append(txt); 
		 }
		 */
		 var productname =$("<a href="+"url"+" "+"id="+"a2"+"></a>").text(data[2].RefinementValue);
		  $("#url").append(productname); 
		  
		 var ur =$("<li href="+"url"+" "+"id="+"li4"+"></li>").text(data[4].RefinementValue);
		 $("#a2").append(ur); 
		 
		 var release =$("<li href="+"url"+" "+"id="+"li1"+"></li>").text(data[0].RefinementValue);
		 $("#li4").append(release); 
		 
		 var type =$("<li href="+"url"+" "+"id="+"li3"+"></li>").text(data[3].RefinementValue);
		 $("#li1").append(type); 
		 
		 var Language =$("<li href="+"url"+" "+"id="+"li0"+"></li>").text(data[1].RefinementValue);
		 $("#li3").append(Language);
 },
  error: function(){
                 alert('fail from PL');
             }		
   });	 
	

}
