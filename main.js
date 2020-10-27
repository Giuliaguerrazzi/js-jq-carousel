// slider di immagini
$(document).ready( function() {

// click del mouse
 $('.next').click( function () {
   direzione('next');
 })

 $('.prev').click( function () {
   direzione('prev');
 })

// keyboard
  $(document).keydown(function(event) {
    
    if (event.keyCode = 37) {
      direzione('prev');
    }
    else if (event.keyCode = 39) {
      direzione('next');
    }
  })
})


// funzioni
 function direzione(direction){
   var imageActive = $('.images img.active');
   var iconActive = $('.nav i.active');

   imageActive.removeClass('active');
   iconActive.removeClass('active');

   // next
   if (direction === 'next') {
     if (imageActive.hasClass('.last') === true) {
       $('.images img.first').addClass('active');
       $('.nav i.first').addClass('active');
     }
     else {
       imageActive.next('img').addClass('active');
       iconActive.next('i').addClass('active');
     }
   }
   else if (direction === 'prev') {
     if (imageActive.hasClass('.first') === true) {
       $('.images img.last').addClass('active');
       $('.nav i.last').addClass('active');
     }
     else {
       imageActive.prev('img').addClass('active');
       iconActive.prev('i').addClass('active');
     }
   }
 }
