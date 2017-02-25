$(document).ready(function(){


$(".form").hide()

$(".chairs").click(function(){
	$(this).toggleClass('chairs2');

});

$('#ready').click(function(){
  $('form').show();
  $(this).fadeTo("fast", 0.3);
});

$('#submit').click(function(){
    event.preventDefault();
  $('form').hide();
});

var array = [];

function grabInput(){
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    array.push({name: name, email: email});
    console.log(array);
}
});
