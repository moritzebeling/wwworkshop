$(document).mousemove(function(event) {
  
    windowWidth = $(window).width(); // vw
    windowHeight = $(window).height(); // vh
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #ff008d, #1e3cf9, #C8C8C8, #C8C8C8, #DCDCDC, #C8C8C8, #C8C8C8, #C8C8C8, #C8C8C8, #C8C8C8, #DCDCDC, #DCDCDC, #DCDCDC, #DCDCDC, #DCDCDC, #DCDCDC, #DCDCDC, #DCDCDC, #DCDCDC, #DCDCDC)');
  
  });
  
  $('.text3').click(function(){
  $('#hidden').toggle(); 
  }); 