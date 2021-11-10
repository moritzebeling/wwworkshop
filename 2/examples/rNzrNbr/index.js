$(document).mousemove(function(event) {

    windowWidth = $(window).width(); // vw
    windowHeight = $(window).height(); // vh

    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #ff0000, #0000ff)');

  });
