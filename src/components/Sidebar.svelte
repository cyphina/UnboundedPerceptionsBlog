<script>
    import { slide } from 'svelte/transition';
    import { linear } from 'svelte/easing';
    let options = { duration: 1000, easing: linear };
    export let open;
</script>

{#if open}
    <aside class="absolute h-auto bg-black text-white rounded-b-md" transition:slide="{{ ...options, x: -150 }}">
        <nav class="text-xl px-4 py-2">
            <a href="#about" class="block hover:text-red-700">About</a>
            <a href="#contact" class="block hover:text-red-700">Contact</a>
        </nav>
    </aside>
{/if}

<style>

</style>
