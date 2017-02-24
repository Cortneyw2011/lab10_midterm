$(document).ready(function(){
$(".form").hide()
$("img").click(function(){
 	$(".form").toggle();
	$(this).fadeTo("fast", 0.3);
});
});
