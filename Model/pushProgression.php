<?php

header("Content-Type: text/plain"); // Utilisation d'un header pour spécifier le type de contenu de la page. Ici, il s'agit juste de texte brut (text/plain).

$urlUser = (isset($_GET["urlUser"])) ? $_GET["urlUser"] : NULL;
$progression = (isset($_GET["progression"])) ? $_GET["progression"] : NULL;



////////////////Action
require('../Model/autoload.php'); // class autoading
require('../Model/dbconnexion.php'); // database connexion

// We create a manager for character manipulation
$manager = new UserDataManager($db);
// We get all the characters in the database
if ($manager->exists($_GET['urlUser'])) // If the user exists, we get it
{
  $user = $manager->get($_GET['urlUser']);
  $user->setText01_progression($progression);
  $manager->update($user);
}
////////////////Action


if ($urlUser && $progression) {
	////////////////Faire quelque chose...

  //$user->setProgression(1);
  //echo "HELLO";

  ////////////////Fin de faire qqch...
} else {
	echo "FAIL";
}

?>
