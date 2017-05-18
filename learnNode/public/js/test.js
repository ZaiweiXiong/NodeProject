
var server ="http://localhost:8085/links";
var url_=server;

function testbutton(){
	alert('testbutton!');
}

function testAjax(){
	
  $.ajax({
 
  type: "Get", 
  dataType: "json", //dataType: "application/json;odata=verbose",  
  url: url_,
  success:  function (data) {
	  
			//var txt = $("<p>Links</p>")
			//var txt2=$("<p id="++"></p>").text("Language");  
		    //console.log(data);
			alert(data.length);
			for (var i=0;i<data.length;i++){
				var name = data[i].Name;
				$('#mydiv2').append("<p id="+i+">"+"<a href="+data[i].URL+"target="+"_blank"+">"+data[i].Name+"</a>"+"</p>");  
				//console.log(name);
			}
			
		}		
   });	
}