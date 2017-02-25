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
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var newObject = {name: name,
                  email: email};
    array.push(newObject);
    console.log(array);
}
