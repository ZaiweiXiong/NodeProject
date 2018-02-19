window.onload=test;
function test(){
    t();
	//remove ();
	$("#mybutton").click(function(){
	
		 //testAajx ();
	});
}

function testAajx () {
	
	$.ajax({
		  url: 'http://xzw:8082/process_get',
	      type: 'get',
		  dataType: 'json',
	      error: function(data){
			  console.log(data);
			},
		success: function(data){
			    for (var i=0;i<data.length;i++) {
					$("#mydiv").append('<li>'+data[i].firstName+' '+data[i].lastName+'</li>');
				}	
		}
	});
	
}

function t () {
	
	$(document).ready(function(){
		$.ajax({
		  url: 'http://xzw:8082/process_get',
	      type: 'get',
		  dataType: 'json',
	      error: function(data){
			  console.log(data);
			},
		success: function(data){
			    for (var i=0;i<data.length;i++) {
					$("#mydiv").append('<li>'+data[i].firstName+' '+data[i].lastName+'</li>');
				}	
		}
	});
	
	});
}
function remove () {
	
	$(document).ready(function(){
		$("#delete").click(function(){
			//alert ('remvoe');
			//del ();
		});
	});
}
function del () {
	
	$.ajax({
		  url: 'http://xzw:8082/del_user',
	      type: 'get',
		  dataType: 'json',
	      error: function(data){
			  //console.log(data);
			},
		success: function(data){
			    alert('ok deleted');
		}
	});
	
}