//onload=requestAjax;
//createElement; //requestAjax;

function createElement(name,url,i){
	
	var txt2=$("<p id="+'p'+i+"></p>").text(name+" ");  
	$("#mydiv3").append(txt2);  
	
	var txt3 = $("<a href="+url+">"+"</a><br/>").text(name);
	$("#p"+i).append(txt3); 
	
	//var i=1;
	//var url='http://www.baidu.com';
    //var name="baidu";
}

function requestAjax(){

$.ajax({
	 
  type: "Get", //rest Type
  dataType: "json",
  url: "http://155.35.87.158:8082/data/data.json",
  success:  function (data) {
	  
			for (var i=0;i<data.length;i++){
				console.log('URL->'+data[i].URL);
				console.log('Name->'+data[i].Name);
				createElement(data[i].Name,data[i].URL,i);
			}
			}		
		});
		
			//console.log(data.length); 
			//var obj = JSON.parse(data); 
			// var str = JSON.JSON.stringify();
			//myFunction();
			
			
}


function myFunction(){
	
	$(document).ready(function(){
   var $form = $('form');
   $form.submit(function(){
      $.post($(this).attr('action'), $(this).serialize(), function(response){
            // do something here on success
      },'json');
      return false;
   });
});
}
function getJson (){
	
$.getJSON( "../data/data.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

}


