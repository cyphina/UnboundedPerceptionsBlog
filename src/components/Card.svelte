<script>
    export let title; // Quick blog title
    export let summary; // Quick block discription
    export let tags = [];
    export let link;
</script>

<div class="w-1/3 h-40 overflow-hidden m-2 shadow-2xl rounded-lg bg-red-200 bg-opacity-100">
    <a href="{link}">
        <div class=" h-full">
            <div class="font-bold text-xl mb-2">{title}</div>
            <p class="text-gray-700 text-base">{summary}</p>
        </div>
    </a>
</div>
