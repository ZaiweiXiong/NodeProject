window.onload=test

var host ='http://xzw:8082/';
//'http://localhost:8082/';
//'http://xzw:8082/';

function test () {
	
		FindOne ();
	
}

function FindOne () {
	
	
	$(document).ready(function(){
	   $("#login").click(function(){
		 var n = $("#name").val();
		
		 $.ajax({
		  url:  host+'isExits'+n,
	      type: 'get',
		  dataType: 'json',
		  error: function(data){
			  //console.log(data); 
			},
		success: function(data){
			  
			  if (data.a==='not found'){
				 alert (data.a +' user ' +n);
				 window.location.reload();	 
			   }else {
				 alert ('welcome user! '+data.a);
				 window.location.href =  host+"home.html";
			   }  
			}
		 });
		
		});
	});	
}