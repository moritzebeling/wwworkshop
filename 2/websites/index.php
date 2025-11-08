<?php include '../_/header.php' ?>

<style>

    main {
        padding: 1rem;
    }

</style>

<ul>
    <?php foreach( glob("*/index.html") as $path ): ?>
        <?php
        // $path = str_replace('/index.html','',$path);
        // $title = str_replace('examples/','',$path);
        ?>
        <li>
            <a href="/2/websites/<?= $path ?>" target="_blank"><?= str_replace( '/index.html', '', $path) ?></a>
        </li>
    <?php endforeach ?>
    </ul>

<?php include '../_/footer.php' ?>
