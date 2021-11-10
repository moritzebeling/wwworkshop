function show(){
    console.log('show');
    $('.sky').fadeIn('slow',function(){

       setTimeout(function(){
          hide();
       }, 300);
    });
  }

  function hide(){
    $('.sky').fadeOut();
    console.log('hide');
  }


  $('.sun').click(function(){
    show();
  });
