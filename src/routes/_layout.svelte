<script>
    import Navbar from '../components/Navbar.svelte';
    import Breadcrumb from '../components/Breadcrumb.svelte';
    import { stores } from '@sapper/app';
    const { page } = stores();
</script>

<svelte:head>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
</svelte:head>

<main>
    <Navbar />
    <Breadcrumb sitePath="{$page.path}" />
    <slot />
</main>

<style>
    main {
        position: relative;
        max-width: 70em;
        background-color: rgb(255, 255, 255, 0.8);
        margin: 1em auto;
        box-sizing: border-box;
        border-width: 0.1em;
        box-shadow: 0em 0em 0.3em black;
        border-color: black;
    }

    :global(body) {
        background-image: url('/images/aridukacat.jpg');
        background-size: 100% auto;
    }
</style>
