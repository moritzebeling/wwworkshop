<?php

$request = $_SERVER['REQUEST_URI'];
$request = str_replace('/2/manual/','',$request) . '.md';

require_once '../_/vendor/Parsedown.php';
$Parsedown = new Parsedown();
$Parsedown->setBreaksEnabled(true);
$file = file_exists( $request ) ? file_get_contents( $request ) : file_get_contents( 'index.md' );

include '../_/header.php';

?>

<style>

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 1rem;
        padding: 1rem;
    }
    aside nav {
        position: sticky;
        top: 4rem;
    }
    aside a {
        display: block;
    }

</style>

<div class="wrapper">
    <aside>
        <nav>
            <?php foreach( glob("*") as $path ): ?>
                <?php
                $path = str_replace('.md','',$path);
                $title = str_replace('examples/','',$path);
                ?>
                <a href="/2/manual/<?= $path ?>"><?= $path ?></a>
            <?php endforeach ?>
        </nav>
    </aside>
    <main class="markdown">

        <?= $Parsedown->text( $file ); ?>

    </main>
</div>

<?php

include '../_/footer.php';
