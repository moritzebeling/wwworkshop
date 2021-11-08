<?php include '_/header.php' ?>

<style>

    main {
        padding: 1rem;
    }
    figure {
        margin-bottom: 1rem;
    }

    @media (min-width: 800px){
        main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        figure {
            margin-bottom: 0;
        }
    }
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #eee;
    }

</style>

<main>
    <?php foreach( glob("examples/*/index.html") as $path ): ?>
        <?php
        $path = str_replace('/index.html','',$path);
        $title = str_replace('examples/','',$path);
        ?>
        <figure>
            <div class="square">
                <iframe src="/2/embed/<?= $path ?>" title="<?= $title ?>"></iframe>
            </div>
            <figcaption>
                <a href="/2/embed/<?= $path ?>"><?= $title ?></a>
                <a href="/2/code/<?= $path ?>">Code</a>
            </figcaption>
        </figure>
    <?php endforeach ?>
</main>

<?php include '_/footer.php' ?>
