<?php
require('View/header.php'); // on affiche le bas de page
?>
<div id="menu">
  <?php
  require('View/menuAudioBook.php'); // on affiche le bas de page
  ?>
  <div class="progress"></div>
</div>

<div id="content"></div>

<audio id="myAudio">
  <source id="myAudioSource" src="" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<div id="feedback"></div>

<?php
require('View/footerAudioBook.php'); // on affiche le bas de page
?>
