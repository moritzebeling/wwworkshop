<?php

$request = $_SERVER['REQUEST_URI'];
$request = str_replace('/2/manual/','',$request) . '.md';

require_once '../_/vendor/Parsedown.php';
$Parsedown = new Parsedown();
$Parsedown->setBreaksEnabled(true);

include '../_/header.php';

$file = file_exists( $request ) ? file_get_contents( $request ) : file_get_contents( 'index.md' );

echo $Parsedown->text( $file );

include '../_/footer.php';
