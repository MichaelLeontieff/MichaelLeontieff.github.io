$(document).ready(function(){
  $("#typed").typed({
    stringsElement: document.getElementById('typed-strings'),
    typeSpeed: 10,
    backSpeed: 1,
    callback: function() {
      $(".about-text").css("visibility", "visible");
    }
  });
  // // Didn't write this code, in the process of learning JQuery
  // $(window).scroll(function() {
  //   var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  //   $(".fade").each(function() {
  //     /* Check the location of each desired element */
  //     var objectBottom = $(this).offset().top + $(this).outerHeight();
  //
  //     /* If the element is completely within bounds of the window, fade it in */
  //     if (objectBottom < windowBottom) { //object comes into view (scrolling down)
  //       if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
  //     } else { //object goes out of view (scrolling up)
  //       if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
  //     }
  //   });
  // }).scroll(); //invoke scroll-handler on page-load
});
