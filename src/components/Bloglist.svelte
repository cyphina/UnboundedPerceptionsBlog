<script>
    import Card from './Card.svelte';

    export let posts, hasMore, pageNum, maxPageNum;

    /** Max number of elements to surround our pageNum on both sides */
    const maxPageNumsPagination = 7;
    const maxPaginationWidth = 3;
    const postRows = 3;

    function makePaginationNums() {
        let nums = Array.from({ length: maxPageNumsPagination }, (_, i) => i);
        nums.forEach((item, index, arr) => {
            arr[index] = item - maxPaginationWidth + pageNum;
        });
        nums = nums.filter(item => {
            return item > 0 && item <= maxPageNum;
        });
        return nums;
    }
</script>

<main class>
    <!-- Create a row in each column -->
    <div class="flex flex-col cssAdjustHeight mb-2">
        {#each Array(postRows) as _, index}
            <div class="flex flex-row justify-around">
                {#each posts.slice(index * postRows, (index + 1) * postRows) as post}
                    <Card title="{post.title}" summary="{post.summary}" link="{`/Posts/${post.permalink}`}" />
                {/each}
            </div>
        {/each}
    </div>

    <div class="flex justify-center pt-3">
        {#if pageNum > 1}
            <div class="bg-indigo-200 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-1 shadow">
                <a href="/?page={pageNum - 1}" sapper-noscroll>Prev</a>
            </div>
        {/if}
        {#each makePaginationNums() as index (index)}
            {#if index == pageNum}
                <div class="bg-indigo-200 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-1 shadow">
                    <a href="/?page={index}" sapper-noscroll>{index}</a>
                </div>
            {:else}
                <div class="bg-indigo-200 hover:bg-blue-400 text-pink-800 font-bold py-2 px-4 rounded-1 shadow">
                    <a href="/?page={index}" sapper-noscroll>{index}</a>
                </div>
            {/if}
        {/each}
        {#if hasMore}
            <div class="bg-indigo-200 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-1 shadow">
                <a href="/?page={pageNum + 1}" sapper-noscroll>Next</a>
            </div>
        {/if}
    </div>

    <div>Page {pageNum} out of {maxPageNum}</div>
</main>

<style>
.cssAdjustHeight {
    height: 32em;
}
</style>