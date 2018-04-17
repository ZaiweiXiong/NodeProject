window.onload=test;

var host ='http://localhost:8082/';
//'http://xzw:8082/';
//'http://localhost:8082/'

function test(){
	
    loadData ();
	SelectOne();
	openMenu ();
	logInUser() ;
	logOut ();
	closeMenu();

	selectOption();
	selectTable ();
	selectGender();
	selectTypeRoom();
	setSizetoImage ();
	setSizetoImageL();
	selectOptionAbout()
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

function getRoom () {
	
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
			    	'RoomNo'+'</th>'+
			    	'<th>'+'HotelNo'+'</th>'+
			    	'<th>'+'HotelName'+'</th>'+
			    	'<th>'+'price'+'</th>'+
			    	'<th>'+'checkInTime'+'</th>'+
			    	'<th>'+'roome type'+'</th>'+
			    	'<th>'+'guestName'+'</th>'+
			    	'</tr>');

			   
			    for (var i=0;i<data.length;i++) {

					$("#home-table").append(
						'<tr>'+
						'<td>'+data[i].roomNo+'</td>'+
						'<td>'+data[i].hotelNo+'</td>'+
						'<td>'+data[i].hotelName+'</td>'+ 
						'<td>'+data[i].price+'</td>'+ 
						'<td>'+data[i].checkInTime+'</td>'+ 
						'<td>'+data[i].type+'</td>'+ 
						'<td>'+data[i].guestName+"("+data[i].guestNo+")"+'</td>'+ 
						'</tr>');
				}	
			}
	});
	
}

function loadData () {
	
	$(document).ready(function(){
		getRoom();
	});
}

function SelectOne () {
	
	
	$(document).ready(function(){
		
	   $("#myFind").click(function(){
		 var n =$("#find_name").val();
		 var table =$("select#myselect option:checked" ).val();
		 //alert ('FindOne! ' +n);
		 $.ajax({
		  url: host+'process_findOne'+n+':'+table,
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

function selectOption () {

	var options = new Array();
	options=['room','guest'];
	$("#myselect").append("<option>Select table from list</option>");

 for (var i=0;i<options.length;i++) {
		
		var info =
	   "<option>"+    
		options[i]+
	   "</option>"
		$("#myselect").append(info);
	}

}

function selectOptionAbout () {

	var options = new Array();
	options=['report 1','report 2'];
	$("#aboutSelect").append("<option>Select report from list</option>");

 	for (var i=0;i<options.length;i++) {
		
		var info =
	   "<option>"+    
		options[i]+
	   "</option>"
		$("#aboutSelect").append(info);
	}


	$("#aboutSelect").change(function() {
			var txt = $("select#aboutSelect option:checked" ).val();
			$("#report").text(txt);
           
		});

}

function selectGender() {

var options = new Array();
	options=['male','Female'];
	$("#registerGender").append("<option>Select male/Female</option>");
	for (var i=0;i<options.length;i++) {
		
		var info =
	   "<option>"+    
		options[i]+
	   "</option>"
		$("#registerGender").append(info);
	}

}

function selectTypeRoom () {

		var options = new Array();
		options=['Master','president','double','single','standard'];
		$("#registertype").append("<option>Select room</option>");
		for (var i=0;i<options.length;i++) {
		
		var info =
	   "<option>"+    
		options[i]+
	   "</option>"
		$("#registertype").append(info);
	}

		$("#registertype").change(function() {
			var txt = $("select#registertype option:checked" ).val();
			//alert('room '+ "./backup/images/"+txt+".jpg");
            //document.getElementById("roomimg").src="./backup/images/"+txt+".jpg";
            $("#roomimg").attr('src',"./backup/images/"+txt+".jpg")
		});

}

function selectTable () {


	$("#myselect").change(function(){

		 var txt = $("select#myselect option:checked" ).val();
		 
          if (txt==='room'){

          	  $("#home-table").children().remove();
          	  getRoom();//getRoom table
          	  return;
          }else if (txt==='Select table from list') {

          	 $("#home-table").children().remove();
          	

          } else {

          		$("#home-table").children().remove();
          		getGuest(txt); //getGuest table;
          }
		   
		});
}

function setSizetoImage () {

	var w =460;
		$(document).ready(function(){

			 $("#roomimg").mouseover(function(){

			 	
			      $("#roomimg").attr('width',w);
				
			 	});	
		});	
}

function setSizetoImageL () {

	var w =100;
		$(document).ready(function(){

			 $("#roomimg").mouseleave(function(){

			 	 //$("#roomimg").width(w);
			      $("#roomimg").attr('width',w);
				 
			 	});	
		});	
}


function getGuest (txt) {


		 $.ajax({

		  url:  host+'whichTable'+txt,
	      type: 'get',
		  dataType: 'json',
		  error: function(data){
			  console.log(data); 
			},
		success: function(data){
			  
			   $("#home-table").append('<tr id="home-tr">'+
			    	'<th>'+'guestNo'+'</th>'+
			    	'<th>'+'guestName'+'</th>'+
			    	'<th>'+'guestDate'+'</th>'+
			    	'<th>'+'guestAddress'+'</th>'+
			    	'<th>'+'guestEmail'+'</th>'+
			    	'<th>'+'gender'+'</th>'+
			    	'</tr>');

			   
			    for (var i=0;i<data.length;i++) {

					$("#home-table").append(
						'<tr>'+
						'<td>'+data[i].guestNo+'</td>'+
						'<td>'+data[i].guestName+'</td>'+
						'<td>'+data[i].guestDate+'</td>'+
						'<td>'+data[i].guestAddress+'</td>'+
						'<td>'+data[i].guestEmail+'</td>'+
						'<td>'+data[i].gender+'</td>'+
						'</tr>');
				}	

			}
		  });
		

}

