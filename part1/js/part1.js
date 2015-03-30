$( document ).ready(function() {

  // This line calls the "sayHello" function.
  console.log('jQuery is running');

$(".question").on('click', function(){
  //$(this).toggleClass("fast");
$(this).next(".answer").toggle();
    
    
    
    
    
});  
});