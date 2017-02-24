$(document).ready(function(){
$(".form").hide()
$( "#chair1" ).click(function(){
	$( ".form" ).show();
	$("#chair1").fadeTo("slow", 0.75);
	});
});
