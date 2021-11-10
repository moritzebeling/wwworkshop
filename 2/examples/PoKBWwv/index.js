$(document).bind('mousemove', function(event){
    $('.box').css({
      top: event.pageX - $(".box").height()/2,
      left: event.pageY - $(".box").width()/2
    });
 });
 $(document).bind('mousemove', function(event){
    $('.second').css({
      top: event.pageY - $(".second").height()/2,
      left: event.pageY - $(".second").width()/2
    });
 });
 $(document).mousemove(function(event) {

   windowWidth = $(window).width(); // vw
   windowHeight = $(window).height(); // vh

   mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
   mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

   $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #ffddce, #6a4cf7)');

 });
