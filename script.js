$(document).ready(function(){



$(".form").hide()

$(".chairs").click(function(){
	$(this).toggleClass('chairs2');
});


$('.chairs').click(function(){
  $('form').show();
});

$('#submit').click(function(){
    event.preventDefault();
  $('form').hide();
});

$("#submit").click(function(){
    $(".row").append(array);
});
});


var array = [];
function grabInput(){
    // event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    array.push({name: name, email: email});
    console.log(array);
  $( ".chairs2" ).append('SEAT TAKEN!');
    // $( ".chairs2" ).append($('#name').val() );
  }
