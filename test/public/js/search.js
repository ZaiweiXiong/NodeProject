

function doSearch(value){
            alert('You input: ' + value);
        }
		
function testSearch(value){
	console.log(value);
}

function requestURL(){

$.ajax({
	 
  type: "Get", //rest Type
  dataType: "json",
  url: 	'http://155.35.87.158:8081/data/data.json',	
  //"http://search.ca.com/_api/search",
  //https://www.google.com.au/webhp?gws_rd=ssl#q='+'test'
  crossDomain: true,
  success:  function (data) {
	        
			 //console.log(data);
			 alert(data);
			 
			}		
		});
}
var token = '';
function requestJsonp(){
	
	var Data = {
      "data": {
        "description": "Share and rank tips for eating healthily on the cheaps!", 
        "name": "Eating Healthy & Cheap", 
        "videoSubmissionAllowed": false
      }
    };

	
	$.ajax({
    url: 'https://www.google.com.au/webhp?gws_rd=ssl#q='+'test',
    data: Data,
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function() { alert("Success"); },
    error: function() { alert('Failed!'); },
    beforeSend: setHeader
});
}
function setHeader(xhr) {
	xhr.setRequestHeader('Authorization', token);
}


