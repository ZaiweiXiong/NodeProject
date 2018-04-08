window.onload=test;

var host ='http://xzw:8082/';
//'http://xzw:8082/';
//'http://localhost:8082/'

function test(){
	
    loadData ();
	SelectOne();
	openMenu ();
	logInUser() ;
	logOut ();
	closeMenu();
	
}

function logInUser () {
	
	 $.ajax({
		 
		  url: host+'logIn',
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
		  url: host+'logOut',
	      type: 'get',
		  dataType: 'json',
		  error: function(data){
			 
			  alert ('faile to logout '+data) ;
			},
		success: function(data){
			   alert ('logout user '+data.a);
			   window.location.href = host+"login.html"
			}
			});
		 
	});
	
}

function testAajx () {
	
	$.ajax({
		
		  url: host+'process_get',
	      type: 'get',
		  dataType: 'json',
	      error: function(data){
			  alert('please login');
			  window.location.href = host+"login.html"
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
		  url: host+'process_findOne'+n,
	      type: 'get',
		  dataType: 'json',
		  error: function(data){
			  console.log(data+"  xxx");
			},
		success: function(data){
			
			    alert ('find user ! '+data.a);
				$("#find_name").val("");
				 //window.location.reload();
				 window.location.href = host+"UserTable.html";
				}
			});
		
		});
	});	
}

function openMenu () {
        
        var w =160;
		$(document).ready(function(){

			 $("#menu").mouseover(function(){

			 	 $("#mymenu").width(w);
			 
				
			 	});	
		});	
}

function closeMenu() {

		$(document).ready(function(){

				 $("#mymenu").mouseleave(function(){

			 	 $("#mymenu").width(0);
			 
			 	});	
		});	

}


