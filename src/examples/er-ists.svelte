<script>

    export let background = 'yellow';

</script>

<div class="body {background}">

    <h1>Er ist’s</h1>

    <p>Frühling läßt sein blaues Band<br />
    Wieder flattern durch die Lüfte;<br />
    Süße, wohlbekannte Düfte<br />
    Streifen ahnungsvoll das Land.</p>

    <p>Veilchen träumen schon,<br />
    Wollen balde kommen.<br />
    – Horch, von fern ein leiser Harfenton!<br />
    Frühling, ja du bist's!<br />
    Dich hab ich vernommen!</p>

    <footer>
        <h4 class="author">Eduard Mörike</h4>
        <span class="year">1804—1875</span>
    </footer>

</div>

<style>

    .body {
        width: 100%;
        height: 100%;
        color: var(--color-violet);
        text-align: center;
        padding: 1rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    h1, p, footer {
        margin: 0.5rem 1rem;
    }

    h1 {
        text-transform: uppercase;
        letter-spacing: 0.02em;
        font-weight: bold;
        color: var(--color-blue);
    }

    footer {
        color: var(--color-green);
    }

</style>
