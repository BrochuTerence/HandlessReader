//SCROLL progression


// Definition of scroll length
var scrollPace = window.innerHeight - 150;
var scrollPaceNeg = 0 - window.innerHeight + 150;

// Function for progressing in the text
function progressScroll() {
  // Scroll certain amounts from current position
  window.scrollBy({
    top: scrollPace, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
}

// Function for going back in the text
function back() {
  // Scroll certain amounts from current position
  window.scrollBy({
    top: scrollPaceNeg, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
}

// Launch the scroll function if the user clicks


document.addEventListener('keypress', function(e) {
  progressScroll();
  console.log("down");
  if (e.keyCode == 32) {

    setTimeout(function(){ progressScroll(); }, 10); // Timeout prevent default space scroll in order to do a smaller size scroll

      console.log("up");
  }
});

document.addEventListener('keypress', function(e) {
  back();
  console.log("up");
  if (e.keyCode == 65) {

    setTimeout(function(){ progressScroll(); }, 10); // Timeout prevent default space scroll in order to do a smaller size scroll

      console.log("up");
  }
});

document.addEventListener('keypress', function(e) {
  back();
  console.log("up");
  if (e.keyCode == 81) {

    setTimeout(function(){ progressScroll(); }, 10); // Timeout prevent default space scroll in order to do a smaller size scroll

      console.log("up");
  }
});

//////////// Function manipulating text size
var  textSize = 65;
var textPace = 5;

// Function increasing text size
var increaseTextSizeButton = document.getElementById('character_plus');
increaseTextSizeButton.addEventListener('click', function() {
  if (isUpdated) {isUpdated = false;}
  textSize = textSize + textPace;
  content.style.fontSize = textSize + "px";
  applyProgression();
  if (isUpdated) {isUpdated = true;}
}, false);

// Function decreasing text size
var decreaseTextSizeButton = document.getElementById('character_minus');
decreaseTextSizeButton.addEventListener('click', function() {
  if (isUpdated) {isUpdated = false;}
  textSize = textSize - textPace;
  content.style.fontSize = textSize + "px";
  applyProgression();
  if (isUpdated) {isUpdated = true;}
}, false);

//////////// Function manipulating marges
var  widthSize = 90;
var widthPace = 5;

// Function increasing width size
var increaseWidthSizeButton = document.getElementById('marge_minus');
increaseWidthSizeButton.addEventListener('click', function() {
  if (isUpdated) {isUpdated = false;}
  widthSize = widthSize + widthPace;
  content.style.width = widthSize + "%";
  applyProgression();
  if (isUpdated) {isUpdated = true;}
}, false);

// Function decreasing width size
var decreaseWidthSizeButton = document.getElementById('marge_plus');
decreaseWidthSizeButton.addEventListener('click', function() {
  if (isUpdated) {isUpdated = false;}
  widthSize = widthSize - widthPace;
  content.style.width = widthSize + "%";
  applyProgression();
  if (isUpdated) {isUpdated = true;}
}, false);

//////////// Function manipulating opacity
var  opacityValue = 1;
var opacityPace = 0.1;

// Function increasing opacity value
var increaseOpacitySizeButton = document.getElementById('opacity_plus');
increaseOpacitySizeButton.addEventListener('click', function() {
  opacityValue = opacityValue + opacityPace;
  content.style.opacity = opacityValue;
}, false);

// Function decreasing opacity value
var decreaseOpacitySizeButton = document.getElementById('opacity_minus');
decreaseOpacitySizeButton.addEventListener('click', function() {
  opacityValue = opacityValue - opacityPace;
  content.style.opacity = opacityValue;
}, false);


/////////////// Progress feedback
// https://alligator.io/js/progress-bar-javascript-css-variables/

var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight',
  progress = document.querySelector('.progress'),
  scrollInPercentage;




document.addEventListener('scroll', function() {
  //h[scrollTop] nombre de pixels dont le contenu de l'élément a défilé vers le haut
  //h[scrollHeight] hauteur total de la page
  scrollInPercentage = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  progress.style.setProperty('--scroll', scrollInPercentage + '%');
});

//////////////// Position application

function applyProgression() {
  var scrollInPixels = parseFloat(userData.progression) * ((b[sh]) - h.clientHeight) / 100 ;
  window.scrollTo({
      //behavior: 'smooth',
      left: 0,
      top: scrollInPixels,
  });
}


//////////////// Position recuperation

function lastPositionScroll(lastScrollInPercentage) {
  var scrollInPixels = lastScroll * ((b[sh]) - h.clientHeight) / 100 ;
  window.scrollTo({
      //behavior: 'smooth',
      left: 0,
      top: scrollInPixels,
  });
}
