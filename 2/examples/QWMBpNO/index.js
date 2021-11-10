$(document).ready(function(){
    $("html").click(function(){
      var div = $("div");
      div.animate({height: '300px'}, "slow");
      div.animate({width: '300px'}, "slow");
      div.animate({height: '100px'}, "slow");
      div.animate({width: '100px'}, "slow");
    });
  });
