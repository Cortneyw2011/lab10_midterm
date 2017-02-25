$(document).ready(function(){
$(".form").hide()
$("img").click(function(){
 	$(".form").show();
	$(this).fadeTo("fast", 0.3);
});


// Form Array   >>>>>>>>>>>>>>>>>>>

// $( "form" ).submit(function( event ) {
//   console.log( $( ".form" ).serializeArray() );
//   event.preventDefault();
// 	});
// });

var array = [];

function grabInput(){
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    array.push({name: name, email: email});
    console.log(array);
}
});
