
var strs =new Array("NVD_","NVC_","NIL_");
var sum=0;
var j=0;

$(document).ready(function(){
	
   $("#Modify").click(function(){
		 
	alert('modify');
    var p_0 = $('#p_0').length;
	console.log("p_0->"+p_0);
    if(p_0==0){
		
	for (var i=0;i<strs.length;i++){
		
    var txt2=$("<p id="+'p_'+i+"></p>").text(strs[i]+":");  
	$("#modifyValue").append(txt2);  
	
	var txt3 = $("<input type="+"text"+" "+"id="+strs[i]+" "+"value="+strs[i]+" "+">").text("");
	$("#p_"+i).append(txt3);
   	
	}
	var txt1=$("<button type="+"button"+" "+"id="+"btn1"+" "+"onclick="+"changevalue()"+" "+">").text("Mdify default"); 
																
	$("#modifyValue").append(txt1);  
	
	}else {
		console.log("p_0 is existed!");
	}
	
	
});
	
});

function changevalue(){
	
	for (var i=0;i<strs.length;i++){
		
		var changevalue= "";
		if(strs[i]=="NVD_"){
			changevalue= $( "#"+strs[i] ).val();
			 $( "#NVD" ).val(changevalue );
		}else if(strs[i]=="NVC_"){
			changevalue= $( "#"+strs[i] ).val();
			$( "#NVC" ).val(changevalue);
		}else if(strs[i]=="NIL_"){
			 changevalue= $( "#"+strs[i] ).val();
			 $( "#NIL" ).val(changevalue);
		}
	}
	
	
}

$(document).ready(function(){
	
  $("#Print").click(function(){
	$("#masterbiilstatus").val('known');
	
  });
});
//for size;
$(document).ready(function(){
	
  $("#Size").click(function(){
	 //Length, width and height
	var p0 = $('#p0').length;
	//console.log("p0->"+p0);
	if(p0==0){
		
	var p=$("<p id="+'p0'+"></p>").text("line 1");  
	$("#addSize").append(p); 
	var txt3 = $("<input type="+"text"+" "+"id="+"Length0"+" "+"value="+"Length"+" "+">").text("Length");
	
	var txt2 = $("<input type="+"text"+" "+"id="+"width0"+" "+"value="+"width"+" "+">").text("width");
	
	var txt1 = $("<input type="+"text"+" "+"id="+"height0"+" "+"value="+"height"+" "+">").text("height");
	
	var txt4 = $("<input type="+"text"+" "+"id="+"number0"+" "+"value="+"number"+" "+">").text("number");
	
	
	var txtbtn=$("<button type="+"button"+" "+"id="+"btn2"+" "+"onclick="+"addline()"+" "+">").text("add line"); 
	
	var Save=$("<button type="+"button"+" "+"id="+"btn3"+" "+"onclick="+"saveSize()"+" "+">").text("Save"); 
	
	$("#p0").append(txt3,txt2,txt1,txt4,txtbtn,Save); 
	}else {
		console.log('p0 is existed!');
	}
  });
});
function addline(){
	
	var p = $("#addSize p").length;
	
	var i =p;
	if (p>0){
		
		var p=$("<p id="+'p'+i+"></p>").text("line "+(i+1)); 
		$("#addSize").append(p); 
		
		var txt3_ = $("<input type="+"text"+" "+"id="+"Length"+i+" "+"value="+"Length"+" "+">").text("Length");
		var txt2_ = $("<input type="+"text"+" "+"id="+"width"+i+" "+"value="+"width"+" "+">").text("width");
	    var txt1_ = $("<input type="+"text"+" "+"id="+"height"+i+" "+"value="+"height"+" "+">").text("height");
		var txt4_ = $("<input type="+"text"+" "+"id="+"number"+i+" "+"value="+"number"+" "+">").text("number");
		
		//$("<input class="+"easyui-numberbox"+" "+"type="+"text"+" "+"id="+"Length"+i+" "+"value="+"Length"+" "+">").text("Length");
		$("#p"+i).append(txt3_,txt2_,txt1_,txt4_); 
	}
		alert('add a line');
}
function saveSize(){
	
	console.log("sum->"+sum);
	var p_ = $("#addSize p").length;
	console.log(p_);
	while(j<p_){
	var L = $("#Length"+j).val();
	var w = $("#width"+j).val();
	var h = $("#height"+j).val();
	var n = $("#number"+j).val();
	j++;
	//console.log("j->"+j);
	sum+=L*w*h*n;
	
	}
	console.log("sum->"+sum);
	var size =(sum/60/167)
	var changevalue= $( "#volume" ).val(size);
}

$(document).ready(function(){
	//$("[href='#']")
  $("#NVDinput").click(function(){
	alert('yes');
	
  });
});
