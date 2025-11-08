$( "#draggable" ).draggable();

$('button').click(function(){

  $(this).parents("article").children("main").toggle();

});
