<?php

$request = $_SERVER['REQUEST_URI'];
$request = str_replace('/2/code/','',$request);
$title = str_replace('examples/','',$request);
$request = str_replace('/2','',$request);

$embed = $request;

?>
<!DOCTYPE html>
<html>

    <head>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title><?= $title ?></title>

        <link rel="stylesheet" href="/_/css/reset.css">
        <link rel="stylesheet" href="/2/_/css/global.css">

        <style>
            body {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
                height: 100vh;
                max-height: 100vh;
                overflow: hidden;
                padding: 1rem;
            }
            main {
                overflow-y: auto;
            }
            section {
                margin-bottom: 1rem;
            }
            h5 {
                margin-top: 0.3em;
            }
            section pre {
                padding: 0.5rem;
                font-family: monospace;
                background-color: #000;
                color: #fff;
                line-height: 1.5;
            }
            iframe {
                width: 100%;
                height: 100%;
            }
        </style>

    </head>
    <body>

        <main>

            <?php if( file_exists( '../' . $request . '/index.md' ) ): ?>
                <section>
                    <pre><?= file_get_contents( '../' . $request . '/index.md' ) ?></pre>
                    <h5>index.md</h5>
                </section>
                <?php endif ?>

            <?php if( file_exists( '../' . $request . '/index.html' ) ): ?>
                <section>
                    <pre><?= htmlspecialchars( file_get_contents( '../' . $request  . '/index.html') ) ?></pre>
                    <h5>index.html</h5>
                </section>
            <?php endif ?>

            <?php if( file_exists( '../' . $request . '/index.css' ) ): ?>
                <section>
                    <pre><?= file_get_contents( '../' . $request . '/index.css' ) ?></pre>
                    <h5>index.css</h5>
                </section>
            <?php endif ?>
            <?php if( file_exists( '../' . $request . '/style.css' ) ): ?>
                <section>
                    <pre><?= file_get_contents( '../' . $request . '/style.css' ) ?></pre>
                    <h5>style.css</h5>
                </section>
            <?php endif ?>
            <?php if( file_exists( '../' . $request . '/styles.css' ) ): ?>
                <section>
                    <pre><?= file_get_contents( '../' . $request . '/styles.css' ) ?></pre>
                    <h5>styles.css</h5>
                </section>
            <?php endif ?>

            <?php if( file_exists( '../'.$request . '/index.js' ) ): ?>
                <section>
                    <pre><?= file_get_contents( '../' . $request . '/index.js' ) ?></pre>
                    <h5>index.js</h5>
                </section>
            <?php endif ?>

        </main>

        <aside>
            <iframe src="/2/embed/<?= $embed ?>" title="<?= $title ?>"></iframe>
        </aside>

    </body>
</html>
