<?php include '_/header.php' ?>

<style>

    ul {
        padding: 1rem;
    }
    li {
        margin-bottom: 1rem;
    }
    .square {
        padding-top: 100%;
        position: relative;
    }
    @media (min-width: 800px){
        ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        li {
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
    h5 {
        margin-top: 0.3em;
        padding-left: 1em;
    }

</style>

<ul>
    <?php foreach( glob("examples/*/index.html") as $path ): ?>
        <?php
        $path = str_replace('/index.html','',$path);
        $title = str_replace('examples/','',$path);
        ?>
        <li>
            <div class="square">
                <iframe src="/2/embed/<?= $path ?>" title="<?= $title ?>"></iframe>
            </div>
            <h5>
                <a href="/2/<?= $path ?>"><?= $title ?></a>
            </h5>
        </li>
    <?php endforeach ?>
</ul>

<?php include '_/footer.php' ?>
