$(document).ready(function() {
	$('#addButton').on('click',function() {
		var listitem = $('#listItem').val(); 
        var amount =$('#amount').val();// this is where we set the variable - look for it in the rest of the code below!
		console.log(listitem);
        console.log(amount)
       $('#shoppingList ul').append('<li>'+ amount + "   " +  listitem + '<a href="" class="complete"> Got it! </a>' + '<a href="" class="delete"> X </a></li>');
    });
    
    
    // http://stackoverflow.com/questions/19918898/jquery-remove-element-added-dynamically
     $("#shoppingList ul").on("click", ".delete", function(e){
		e.preventDefault();
        $(this).parent().remove();
    });
     
       $("#shoppingList ul").on("click", ".complete", function(e){
        e.preventDefault();
            $(this).parent().css({
                'text-decoration': 'line-through',
                })
    });

});	