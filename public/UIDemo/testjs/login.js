window.onload=test

function test () {
	
		FindOne ();
	
}

function FindOne () {
	
	
	$(document).ready(function(){
	   $("#login").click(function(){
		 var n = $("#name").val();
		
		 $.ajax({
		  url: 'http://xzw:8082/isExits'+n,
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
				 window.location.href = "http://xzw:8082/home.html";
			   }  
			}
		 });
		
		});
	});	
}