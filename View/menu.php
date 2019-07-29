
<div class="menu_element">
  <img id="character_minus" src="img/icon_minus.svg">
  <img src="img/icon_character.svg">
  <img id="character_plus" src="img/icon_plus.svg">
</div>

<div class="menu_element">
  <img id="marge_minus" src="img/icon_minus.svg">
  <img src="img/icon_marge.svg">
  <img id="marge_plus" src="img/icon_plus.svg">
</div>

<div class="menu_element">
  <img id="opacity_minus" src="img/icon_minus.svg">
  <img src="img/icon_contrast.svg">
  <img id="opacity_plus" src="img/icon_plus.svg">
</div>

<div class="menu_element">
  <img id="swap" src="img/icon_swap.svg">
</div>

<?php
  if ($_GET['user']=="maman")
  {
    ?>
    <div class="menu_element">
      <img src="img/icon_usr01.svg">
    </div>
    <?php
  }
  else if ($_GET['user']=="papa")
  {
    ?>
    <div class="menu_element">
      <img src="img/icon_usr02.svg">
    </div>
    <?php
  }
?>

<span class="menu_element" id="output">...</span>
