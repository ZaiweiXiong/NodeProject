
$(document).ready(function(){ //get products list
	
	$("#products").change(function(){
		
		var selectvalue = $( "#products" ).val();
		
		alert("select product is ->"+selectvalue );
		
		$.post("http://localhost:8083/"+selectvalue,{
		},
		function(data,status){
			var obj = JSON.parse(data);
			
			alert("return objs for version ->"+obj.length);
			
			if(obj!=0){
				
				producttoVersion(obj);
			}
			
		});
	});
});


function producttoVersion(obj){
	
	var v = $('#versions').length;
	var txtv = $("<option>Select a versioin/Release</option>");
	var l1 = "#versions";
	
	if (v==0){
		
	var txt2=$("<select style="+"width:100%"+" "+"onchange="+"VersionToLanguage()"+" "+
	"id="+"versions"+"></select>").text("version");
    $("#version").append(txt2); 
	}
	else {
		console.log('version is existed');
	}
	
	$(l1).empty();
	for (var i=0;i<obj.length;i++){
		// get loop for data of the versions
		var txt = $("<option></option>").text(obj[i].RefinementValue+" ->"+i);//RefinementValue //version
		$(l1).append(txtv,txt); 
	}
}
function VersionToLanguage(){
	
	//console.log("version!");
	var selectversion = $( "#versions" ).val();
		
		alert("version is... "+ selectversion);
		
		$.post("http://localhost:8083/"+selectversion,{
		
		},
		function(data,status){
			var obj = JSON.parse(data);
			alert("return objs for languages ->"+obj.length);
			getLanguage(obj);
			
		});
}


function getLanguage(obj){
	
	var Ls = $('#Languages').length;
	var txtv = $("<option>Select a Language</option>");
	var l1 = "#Languages";
	
	if (Ls==0){
		
	var txt2=$("<select style="+"width:100%"+" "+"onchange="+"OnLanguage()"+" "+
	"id="+"Languages"+"></select>").text("Language");
    $("#Language").append(txt2); 
	
	
	}else {
		console.log('laguage is existed');
	}
	$(l1).empty();
	
	for (var i=0;i<obj.length;i++){
		// get loop for data of the languages
		var txt = $("<option></option>").text(obj[i].RefinementValue);
		
		$(l1).append(txtv,txt); 
	}
	
}

function OnLanguage(){
	
	console.log('select language!');
}

