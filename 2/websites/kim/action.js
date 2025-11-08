$( ".dots" ).click(function() {
    $( "#text" ).toggle( "slow", function() {
    });
  });
  $( ".tots" ).click(function() {
    $( "#text2" ).toggle( "slow", function() {
    });
  });
  $( "#pots" ).click(function() {
    $( "#text3" ).toggle( "slow", function() {
    });
  });
  $( "#slots" ).click(function() {
    $( "#text4" ).toggle( "slow", function() {
    });
  });

  $(document).bind('mousemove', function(event){
    $('img').css({
      top: event.pageY - $("img").height()/2,
      left: event.pageX - $("img").width()/2
    });
 });

