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



function printList(){
for (var i = 0; i<list.length; i++){



  total = total + list[i].price;

  if (i===list.length-1){


 totalFinal.innerHTML = ( 'total: ' + total) ;


  }
}


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


    // function printList(){
    // for (var i = 0; i<list.length; i++){
    //
    //
    // //with each iteration
    //     fullGroceries.innerHTML += ( list[i].name+ ': ' +list[i].price +' \n');
    // //append fullGroceries <div> to grocerList <div> this is appending a div to a paragraph
    //    fullGroceries.appendChild(grocerList);
    //
    //   if (i===list.length-1){
    //
    //
    //  totalFinal.innerHTML = ( 'total: ' + total) ;
    //
    //
    //   }
    // }
