<script>
    import Navbar from '../components/Navbar.svelte';
    import Breadcrumb from '../components/Breadcrumb.svelte';
    import Footer from '../components/Footer.svelte';
    import { stores } from '@sapper/app';
    const { page } = stores();
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet" />
</svelte:head>

<div class="flex flex-col min-h-screen w-screen">
    <main class="flex-grow w-screen">
        <Navbar />
        <Breadcrumb sitePath="{$page.path}" />
        <slot />
    </main>
    <Footer />
</div>

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
</style>
