<?php

$request = $_SERVER['REQUEST_URI'] ? $_SERVER['REQUEST_URI'] : '0_index';
$request = str_replace('/2/manual/','',$request);
$request = str_replace('.html','.md',$request);

require_once '../_/vendor/Parsedown.php';
$Parsedown = new Parsedown();
$Parsedown->setBreaksEnabled(true);
$file = file_exists( $request ) ? file_get_contents( $request ) : file_get_contents( '0_index.md' );

include '../_/header.php';

?>

<style>

    .wrapper {
        display: grid;
        grid-template-columns: 25% 1fr;
        gap: 1rem;
        padding: 1rem;
    }
    aside nav {
        position: sticky;
        top: 6rem;
    }
    aside a {
        display: block;
    }

</style>

<div class="wrapper">
    <aside>
        <nav>
            <?php foreach( glob("*.md") as $path ): ?>
                <?php
                $path = str_replace('.md','.html',$path);
                $title = str_replace('examples/','',$path);
                ?>
                <a href="/2/manual/<?= $path ?>">/<?= $title ?></a>
            <?php endforeach ?>
        </nav>
    </aside>
    <main class="markdown">

        <?= $Parsedown->text( $file ); ?>

    </main>
</div>

<?php

include '../_/footer.php';
