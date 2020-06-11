<script>
    export let posts, hasMore, pageNum, maxPageNum;

    /** Max number of elements to surround our pageNum on both sides */
    const maxPageNumsPagination = 7;
    const maxPaginationWidth = 3;

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
    {#each posts as post}
        <article class="bg-red-200 mb-2">
            <a href="{`/posts/${post.permalink}`}">
                <h2>{post.title}</h2>
                <p>{post.summary}</p>
            </a>
        </article>
    {/each}

    <div class="flex justify-center pt-3">
        {#if pageNum > 1}
            <div class="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-1 shadow">
                <a href="/?page={pageNum - 1}">Prev</a>
            </div>
        {/if}
        {#each makePaginationNums() as index (index)}
            {#if index == pageNum}
                <div class="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-1 shadow">
                    <a href="/?page={index}">{index}</a>
                </div>
            {:else}
                <div class="bg-blue-300 hover:bg-blue-400 text-pink-800 font-bold py-2 px-4 rounded-1 shadow">
                    <a href="/?page={index}">{index}</a>
                </div>
            {/if}
        {/each}
        {#if hasMore}
            <div class="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-1 shadow">
                <a href="/?page={pageNum + 1}">Next</a>
            </div>
        {/if}
    </div>

    <div>Page {pageNum} out of {maxPageNum}</div>
</main>
