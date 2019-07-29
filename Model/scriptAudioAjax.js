var xhr = null;
var userData = null;
var isUpdated = false;

function requestAudioProgression(callback) {
  xhr = getXMLHttpRequest();

  var urlUser = encodeURIComponent(user);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			callback(xhr.responseText);
		}
	};

	xhr.open("GET", "Model/getAudioProgression.php?urlUser="+urlUser,true);
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

function logData(sData) {
	// On peut maintenant traiter les données sans encombrer l'objet XHR.
	if (sData) {
		//alert(sData);
    //console.log("hello");
    userAudioData = JSON.parse(sData);
    file_id = userAudioData.file_id;
    updateFileAudioReader();
	} else {
		//alert("Y'a eu un problème02");
	}
}


function logAudioList(sData) {
	// On peut maintenant traiter les données sans encombrer l'objet XHR.
	if (sData) {
		//alert(sData);
    //console.log("hello");
    audioList = JSON.parse(sData);
    files_number = countProperties(audioList);
    updateFileAudioReader();
	} else {
		//alert("Y'a eu un problème02");
	}
}


///// Update $progression

function updateAudio() {

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

    xhr.open("GET", "Model/pushAudioProgression.php?urlUser=" + urlUser + "&file_id= " + file_id + "&files_number= " + files_number, true);
  	xhr.send(null);
}


var xhr2 = null;
function getAudioList(callback) {
  xhr2 = getXMLHttpRequest();

  var urlUser = encodeURIComponent(user);

	xhr2.onreadystatechange = function() {
		if (xhr2.readyState == 4 && (xhr2.status == 200 || xhr2.status == 0)) {
			callback(xhr2.responseText);
		}
	};

	xhr2.open("GET", "Model/getAudioFileList.php",true);
	xhr2.send(null);

}



requestAudioProgression(logData);
getAudioList(logAudioList);
