window.onload=test();
function test(){
 
	$('#dt').click(function(){
		console.log('test');
	});
}

function testcc() {
	
	$('#dt').click(function (){
		console.log('test main order');
	});
	
}

function testtb(){
	$('#tb').textbox({
    buttonText:'Search',
    iconCls:'icon-man',
    iconAlign:'left'
})
}
function testSubmit(){
	$('#SubmitOne').click(function(){
		console.log('submit');
	});
}

