<?php
require('View/header.php'); // on affiche le bas de page


require('Model/autoload.php'); //on charge automatiquement les classes
require('Model/dbconnexion.php'); // on se connecte à la base de données
$userDataManager = new UserDataManager($db);
$listData = $userDataManager->get(1);


?>
<div id="menu">
  <input type="button" onclick="startArtyom()" value="Start Voice Commands"/> <br>
  <input type="button" onclick="stopArtyom()" value="Stop listening"/> <br>
</div>
<div id="feedback"></div>
<div id="content">
  <span id="output"></span>

<?php

$listData->setText_size(50);
$userDataManager->update($listData);

?>

</div>

<?php
  require('View/footer.php'); // on affiche le bas de page
?>
