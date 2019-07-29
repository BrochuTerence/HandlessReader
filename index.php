<?php
require('View/header.php'); // on affiche le bas de page

?>
<div id="menu">

  <?php
  require('View/menu.php'); // on affiche le bas de page
  ?>
  <div class="progress"></div>

</div>

<div id="content">
<?php

if (isset($_GET['user']))
{
  if ($_GET['user']=="maman")
  {
    require('View/textMaman.php'); // on affiche le bas de page
  }
  else if ($_GET['user']=="papa")
  {
    require('View/textPapa.php'); // on affiche le bas de page
  }
}
else // Il manque des paramètres, on avertit le visiteur
{
  require('View/text.php'); // on affiche le bas de page
}




?>
</div>
<?php


require('View/footer.php'); // on affiche le bas de page
?>
