alert('Welcome!');

$(document).bind('mousemove', function(e){
  $('.butterfly').css({
    top: e.pageY - $(".butterfly").height()/2, // just minus by half the height
    left:  e.pageX - $(".butterfly").width()/2 // just minus by half the width
  });
});
