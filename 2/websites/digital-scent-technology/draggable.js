 $( ".draggable" ).draggable();

 let players = document.querySelectorAll('audio');

 $('#play').click(function(){

   $('#play').hide();

   players.forEach( player => {
     player.play();
   });

 });
