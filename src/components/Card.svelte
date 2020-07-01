<script>
    import { fade } from 'svelte/transition';

    export let title; // Quick blog title
    export let summary; // Quick block discription
    // export let tags = [];
    export let link;
</script>

<div
    class="cardwidth m-2 h-40 bg-indigo-900 hover:bg-opacity-100 bg-opacity-75 border-2 border-opacity-50 border-black
    relative"
    transition:fade="{{ duration: 500 }}"
>
    <a href="{link}" class="h-full w-full inline-block">
        <div class=" divide-y-2 divide-black mt-4 h-auto">
            <div class="font-bold text-xl text-white text-center h-full">{title}</div>
            <p class="text-gray-200 text-base h-full">{summary}</p>
        </div>
    </a>
    <div class="flower absolute bg-no-repeat inset-0"></div>
</div>

<style>
    .flower {
        background-image: url('/images/flower.png');
        opacity: 0.25;
        pointer-events: none;
    }
    .cardwidth {
        width: 31%;
    }
</style>
