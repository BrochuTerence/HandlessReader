
var file_id = null;
var files_number = null;

function countProperties (obj) {
    var count = 0;

    for (var property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            count++;
        }
    }

    return count;
}

var audio = document.getElementById('myAudio');
var link = document.getElementById('myAudioSource');

function updateFileAudioReader() {

  if (typeof audioList !== "undefined" && audioList !== null) {
    link.src = 'son/' + audioList[file_id];
    audio.load();
    var span = document.getElementById('content');
    span.innerHTML = audioList[file_id];
  }
}

function goToPreviousFile() {
  if (file_id > 1) {
  file_id = parseInt(file_id, 10) - 1;
  }
  updateAudio();
  updateFileAudioReader();
}

function goToNextFile() {
  if (file_id<files_number) {
  file_id = parseInt(file_id, 10) + 1;
  }
  updateAudio();
  updateFileAudioReader();
}

// Function swap
var nextButton = document.getElementById('icon_next');
nextButton.addEventListener('click', goToNextFile, false);

// Function swap
var prevButton = document.getElementById('icon_prev');
prevButton.addEventListener('click', goToPreviousFile, false);


var readFile = document.getElementById("myAudio");

function playAudio() {
    readFile.play();
}

function pauseAudio() {
    readFile.pause();
}

function currentTime() {
  return readFile.currentTime;
}



// Activate control
document.getElementById("myAudio").controls = true;

/////////////// Vocal recognition functions

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
          indexes:["toto"],
          action:function(i){
            updateFileAudioReader();
            var span = document.getElementById('content');
            span.innerHTML = audioList[file_id] + ' -- Lecture en cours';
            //artyom.say("je lance le fichier" + audioList[file_id]);
            playAudio();
            stopArtyom();
          }
      },
      // Vocal commands to go back
      {
          indexes:["retour", "précédent"],
          action:function(i){
            var span = document.getElementById('content');
            span.innerHTML = audioList[file_id];


            if (file_id >= 2) {
              var sayId = parseInt(file_id, 10) - 1;
              artyom.say("je recule au fichier numéro" + sayId);
            }

            else {
              artyom.say("c'est le premier fichier. Vous ne pouvez pas reculer. Et pis c'est tout.");
            }
            goToPreviousFile();
          }
      },

      // Vocal commands to go next
      {
          indexes:["suivant", "six ans"],
          action:function(i){
            var span = document.getElementById('content');
            span.innerHTML = audioList[file_id];

            if (file_id<files_number) {
              var sayIdd = parseInt(file_id, 10) + 1;
              artyom.say("j'avance au fichier numéro" + sayIdd);
            }

            else {
              artyom.say("c'est le dernier fichier. Vous ne pouvez pas avancer. Et pis c'est tout.");
            }
            goToNextFile();
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






// Function that stop Artyom
function stopArtyom () {
  artyom.fatality();
}


  function startArtyom () {
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
  }

myAudio.addEventListener("ended", function(){
     myAudio.currentTime = 0;
     startArtyom();
     artyom.say("fini");

     if (file_id<files_number) {
     file_id = parseInt(file_id, 10)+1;
     }
     updateAudio();
     updateFileAudioReader();
});

myAudio.onpause = function() {
     startArtyom();
     resetTimer();
     //alert('tototot');
};

myAudio.onplay = function() {
  stopArtyom();
  stopTimeout();
  //alert('taaaa');
};
// Timeout function
