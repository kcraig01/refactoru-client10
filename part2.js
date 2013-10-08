$(document).ready(function(){



$("[id*='button']").on("click",function(){
	alert("Message displayed: " + $(this).html());
});//original event handler function to display message of button on click 


var displayButtonMessage = function(){
alert("Message displayed: " + $(this).html());
	};//named function to display button message 

var onClickButton = function(){
	$("[id*='button']").on("click", displayButtonMessage())
	// This is unnecessary  
};

displayButtonMessage.call($('#button1')); //woohoo this works 

});