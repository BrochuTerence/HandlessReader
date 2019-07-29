function swap() {
//var thisDOM = window.location.protocol + "//" + window.location.host;
var thisUrl = window.location.pathname;

var distant = "/_other/liseuse03/";
var local = "/LiseuseMaman/V06/";
var rootUrl = local;

  if (thisUrl== rootUrl + "index.php" && user == "maman") {
    document.location.href =  rootUrl + "index.php?user=papa" ;
  }

  else if (thisUrl== rootUrl + "index.php" && user == "papa") {
    document.location.href = rootUrl + "indexAudioBook.php?user=maman" ;
  }

  else if (thisUrl== rootUrl + "indexAudioBook.php" && user == "maman") {
    document.location.href =  rootUrl + "index.php?user=maman" ;
  }

  else if (thisUrl== rootUrl + "index.php") {
    document.location.href =  rootUrl + "indexAudioBook.php" ;
  }

  else if (thisUrl== rootUrl + "indexAudioBook.php") {
    document.location.href =  rootUrl + "index.php" ;
  }

}

// Function swap
var swapButton = document.getElementById('swap');
swapButton.addEventListener('click', swap, false);
