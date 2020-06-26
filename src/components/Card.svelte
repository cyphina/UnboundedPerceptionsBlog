<script>
    import { fade } from 'svelte/transition';

    export let title; // Quick blog title
    export let summary; // Quick block discription
    // export let tags = [];
    export let link;
</script>

<div
    class="w-1/3 h-40 overflow-hidden m-2 bg-indigo-900 hover:bg-opacity-100 bg-opacity-75 border-2 border-opacity-50
    border-black"
    transition:fade="{{ duration: 500 }}"
>
    <a href="{link}">
        <div class=" h-full divide-y-2 divide-black m-2">
            <div class="font-bold text-xl text-white">{title}</div>
            <p class="text-gray-200 text-base">{summary}</p>
        </div>
    </a>
</div>
