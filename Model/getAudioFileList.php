<?php

header("Content-Type: text/plain"); // Utilisation d'un header pour spécifier le type de contenu de la page.

$path    = __DIR__."/../son";
$files = scandir($path);
$files = array_diff(scandir($path), array('.', '..'));
//var_dump($files);
//echo $files[3];


echo '{';
foreach($files as $key => $value) {
$key = $key -1;
  if ($key>1) {
    echo ',';
  }
	echo '"'.$key.'":"'.$value.'"';
}
echo '}';
//print_r ($files);

//echo json_encode($files, JSON_FORCE_OBJECT);
