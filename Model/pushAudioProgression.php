<?php

header("Content-Type: text/plain"); // Utilisation d'un header pour spécifier le type de contenu de la page. Ici, il s'agit juste de texte brut (text/plain).

$urlUser = (isset($_GET["urlUser"])) ? $_GET["urlUser"] : NULL;
$file_id = (isset($_GET["file_id"])) ? $_GET["file_id"] : NULL;
$files_number = (isset($_GET["files_number"])) ? $_GET["files_number"] : NULL;



////////////////Action
require('../Model/autoload.php'); // class autoading
require('../Model/dbconnexion.php'); // database connexion

// We create a manager for character manipulation
$manager = new UserDataManager($db);
// We get all the characters in the database
if ($manager->exists($_GET['urlUser'])) // If the user exists, we get it
{
  $user = $manager->get($_GET['urlUser']);
  $user->setFile_id($file_id);
  $user->setFiles_number($files_number);
  $manager->update($user);
}
////////////////Action


if ($urlUser) {
	////////////////Faire quelque chose...

  //$user->setProgression(1);
  //echo "HELLO";

  ////////////////Fin de faire qqch...
} else {
	echo "FAIL";
}

?>
