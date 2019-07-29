var xhr = null;
var userData = null;
var isUpdated = false;

function requestProgression(callback) {
  xhr = getXMLHttpRequest();

  var urlUser = encodeURIComponent(user);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			callback(xhr.responseText);
		}
	};

	xhr.open("GET", "Model/getProgression.php?urlUser="+urlUser,true);
	xhr.send(null);

}

function readData(sData) {
	// On peut maintenant traiter les données sans encombrer l'objet XHR.
	if (sData) {
		//alert(sData);
    //console.log("hello");
    console.log(JSON.parse(sData));
	} else {
		alert("Y'a eu un problème01");
	}
}

function logDataAndProgress(sData) {
	// On peut maintenant traiter les données sans encombrer l'objet XHR.
	if (sData) {
		//alert(sData);
    //console.log("hello");
    userData = JSON.parse(sData);
    applyProgression();
    isUpdated = "true";
	} else {
		//alert("Y'a eu un problème02");
	}
}

function logData(sData) {
	// On peut maintenant traiter les données sans encombrer l'objet XHR.
	if (sData) {
		//alert(sData);
    //console.log("hello");
    userData = JSON.parse(sData);
	} else {
		//alert("Y'a eu un problème02");
	}
}

//console.log("toto");



requestProgression(logDataAndProgress);

///// Update $progression

function update() {

  if (isUpdated = true) {
    var urlUser = encodeURIComponent(user);

    if (xhr && xhr.readyState != 0) {
  		xhr.abort(); // Si il y a déjà une requête en cours, on l'annule !
  	}
    xhr = getXMLHttpRequest();

    var sVar1 = encodeURIComponent(user);

  	xhr.onreadystatechange = function() {
  		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
  			//callback(xhr.responseText);
  		}
  	};

    xhr.open("GET", "Model/pushProgression.php?urlUser=" + urlUser + "&progression= " + scrollInPercentage, true);
  	xhr.send(null);
  }
}


document.addEventListener('scroll', function() {
    if (isUpdated = true) {
      update();
    }
    userData.progression = scroll;
});
