<!DOCTYPE html>
<html>
  <head>
    <title>TEST LISEUSE</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="style.css" media="all"/>
  </head>

  <body>
<?php
// Initialisation
require('Model/autoload.php'); // class autoading
require('Model/dbconnexion.php'); // database connexion

$manager = new UserDataManager($db); // Creation of the personnages manager
$user = $manager->get('Toto');
//var_dump ($user); // Test de recuperation du user en BDD
?>
