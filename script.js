$(document).ready(function(){
$(".form").hide()
$("img").click(function(){
 	$(".form").show();
	$(this).fadeTo("fast", 0.3);
});

// Form Array   >>>>>>>>>>>>>>>>>>>

$( "form" ).submit(function( event ) {
  console.log( $( ".form" ).serializeArray() );
  event.preventDefault();
	});
});
