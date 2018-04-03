window.onload=test;
function test(){
	
    loadData ();
	SelectOne();
	logInUser() ;
	logOut ();
	
}

function logInUser () {
	
	 $.ajax({
		 
		  url: 'http://xzw:8082/logIn',
	      type: 'get',
		  dataType: 'json',
		  error: function(data){
			 alert ('faile to login '+data) ;
			},
		success: function(data){
			   $("#myWelcome").text('Welcome '+data.a)
			   console.log ('user is ' + data.a);
			   
			}
	  });
	
}

function logOut () {
	
	$("#mylogOut").click(function(){
		
		  $.ajax({
		  url: 'http://xzw:8082/logOut',
	      type: 'get',
		  dataType: 'json',
		  error: function(data){
			 
			  alert ('faile to logout '+data) ;
			},
		success: function(data){
			   alert ('logout user '+data.a);
			   window.location.href = "http://xzw:8082/login.html"
			}
			});
		 
	});
	
}

function testAajx () {
	
	$.ajax({
		
		  url: 'http://xzw:8082/process_get',
	      type: 'get',
		  dataType: 'json',
	      error: function(data){
			  alert('please login');
			  window.location.href = "http://xzw:8082/login.html"
			},
		success: function(data){
			
			    $("#home-table").append('<tr id="home-tr">'+
			    	'<th>'+
			    	'FirstName'+'</th>'+
			    	'<th>'+'lastName'+'</th>'+
			    	'<th>'+'items'+'</th>'+
			    	'</tr>');
			    for (var i=0;i<data.length;i++) {

					$("#home-table").append(
						'<tr>'+
						'<td>'+data[i].firstName+'</td>'+
						'<td>'+data[i].lastName+'</td>'+
						'<td>'+data[i].lastName+'</td>'+ 
						'</tr>');
				}	
			}
	});
	
}

function loadData () {
	
	$(document).ready(function(){
		testAajx();
	});
}

function SelectOne () {
	
	
	$(document).ready(function(){
		
	   $("#myFind").click(function(){
		 var n =$("#find_name").val();
		 //alert ('FindOne! ' +n);
		 $.ajax({
		  url: 'http://xzw:8082/process_findOne'+n,
	      type: 'get',
		  dataType: 'json',
		  error: function(data){
			  console.log(data+"  xxx");
			},
		success: function(data){
			
			    alert ('find user ! '+data.a);
				$("#find_name").val("");
				 //window.location.reload();
				 window.location.href = "http://xzw:8082/UserTable.html";
				}
			});
		
		});
	});	
}
