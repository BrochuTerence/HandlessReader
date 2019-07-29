
var timer;

function timeOutFunction() {
  timer = setTimeout(function(){
    //var popSound = new Audio('img/pop.wav');
    //popSound.play();
    //setTimeout(function(){
      window.location.reload(1);
    //  }, 1000);
  }, 35000);
}

function stopTimeout() {
  clearTimeout(timer);
}

function resetTimer () {

  setTimeout(function(){
    stopTimeout();
    timeOutFunction();
  }, 1000);

}

timeOutFunction();
