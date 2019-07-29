
/////////////// Vocal recognition functions
window.onload = function(){
  var artyom = new Artyom();

  artyom.initialize({
      lang:"fr-FR",
      debug:true,
      continuous:true,
      listen:true
  }).then(function(){
      console.log("Artyom has been correctly initialized");
      console.log("The following array shouldn't be empty" , artyom.getVoices());
  }).catch(function(){
      console.error("An error occurred during the initialization");
  });


  artyom.addCommands([
      // Vocal commands to scroll
      {
          indexes:["swap"],
          action:function(i){
            swap();
          }
      },
      {
          indexes:["toto","tôt","taux","photos","loto","moto","toutou","tutu","tata","tonton","ciao","d\'autant","surtout"],
          action:function(i){
              progressScroll();
              resetTimer();
          }
      },
      // Vocal commands to go back
      {
          indexes:["retour"],
          action:function(i){
              back();
              resetTimer(); 
          }
      }
  ]);

  // Function that write feedback of user speech
  artyom.redirectRecognizedTextOutput(function(text,isFinal){
    var span = document.getElementById('output');

    if(isFinal){
       span.innerHTML ='';
    } else {
       span.innerHTML = text;
    }
  });

};

// Function that stop Artyom
function stopArtyom () {
  artyom.fatality();
}
