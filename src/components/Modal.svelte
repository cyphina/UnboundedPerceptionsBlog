<script>
    import { onMount } from 'svelte';

    export let canClose = true; // Should an X be displayed
    export let className = ''; // Optional CSS class name
    export let modalRef; // If parent components bind to this, they can get a reference to call show(), showModal() and close()

    onMount(() => dialogPolyfill.registerDialog(modalRef)); // Life cycle function called when this component is added to the DOM

    function close() {
        console.log('Close');
        modalRef.close();
    }

    $: classNames = 'Dialog' + (className ? ' ' + className : '');
</script>

<dialog bind:this="{modalRef}" class="{classNames}">
    <header>
        {#if canClose}
            <button class="close-btn ml-1" on:click="{close}">&#x2716;</button>
            <!-- Unicode heavy multiplication X-->
        {/if}
    </header>
    <main>
        <!-- Accessibility issue here fixed in chapter 11-->
        <slot />
    </main>
</dialog>

<style>
    .body {
        padding: 10px;
    }

    .close-btn {
        background-color: transparent;
        border: none;
        color: white;
        font-size: 24px;
        outline: none;
    }

    button.close-btn:hover {
        color: red;
    }

    dialog {
        /** Center the modalRef window in the browser*/
        position: fixed;
        top: 50%;
        width: auto;
        height: auto;
        max-height: 95%;
        transform: translate(0, -52.5%);
        border: none;
        box-shadow: 0 0 10px darkgray;
        padding: 0;
        margin: 1rem;
        overflow-y: scroll;
    }

    header {
        position: sticky;
        top: 0;
        bottom: 0;
        background-color: black;
        box-sizing: border-box;
        color: white;
        font-weight: bold;
        width: 100%;
        height: 2rem;
    }

    main {
        display: block;
        width: 100%;
        height: 100%;
    }

    .title {
        flex-grow: 1;
        font-size: 18px;
        margin-right: 10px;
    }

    dialog::backdrop,
    :global(dialog + .backdrop) {
        background: rgba(0, 0, 0, 0.4) !important; /* Used to override modalRef-polyfill.css */
    }
</style>
