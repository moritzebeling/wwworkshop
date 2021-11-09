<?php

$request = $_SERVER['REQUEST_URI'];
$request = str_replace('/2/embed/','',$request);
$title = str_replace('examples/','',$request);
$request = str_replace('/2','',$request);

$html = $request . '/index.html';
$css = $request . '/index.css';
$css2 = $request . '/style.css';
$css3 = $request . '/styles.css';
$js = $request . '/index.js';

?>
<!DOCTYPE html>
<html>

    <head>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title><?= $title ?></title>

        <?php if( file_exists( '../'.$css ) ): ?>
            <link rel="stylesheet" href="/2/<?= $css ?>">
        <?php endif ?>
        <?php if( file_exists( '../'.$css2 ) ): ?>
            <link rel="stylesheet" href="/2/<?= $css2 ?>">
        <?php endif ?>
        <?php if( file_exists( '../'.$css3 ) ): ?>
            <link rel="stylesheet" href="/2/<?= $css3 ?>">
        <?php endif ?>

    </head>
    <body>

        <?php if( file_exists( '../' . $html ) ){
            include '../' . $html;
        } ?>

        <?php if( file_exists( '../'.$js ) ): ?>
            <script src="/2/<?= $js ?>"></script>
        <?php endif ?>

    </body>
</html>
