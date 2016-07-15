$(document).foundation()
$(function () {
  
  function circleBlink () {
    var circles = $('.circles');
      circles.hide();
      $(circles[0]).fadeIn('slow', function () {
        $(circles[1]).fadeIn('slow', function () {
          $(circles[2]).fadeIn('slow', function () {
           $(circles[3]).fadeIn('slow', function () {
             $(circles[4]).fadeIn('slow', function () {
               $(circles[5]).fadeIn('slow');
               });
             });
            });
          });
        });  
  	};
  setInterval(circleBlink, 3500);
})
