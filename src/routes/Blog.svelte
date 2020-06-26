<script context="module">
    import * as post from '../posts.js';

    export function preload(page) {
        const index = +(page.query.page || 1);

        return {
            posts: post.pages[index - 1],
            hasMore: post.pages.length >= index + 1,
            pageNum: index,
            maxPageNum: Math.ceil(post.posts.length / post.postsPerPage),
        };
    }
</script>

<script>
    import Bloglist from '../components/Bloglist.svelte';
    export let posts, hasMore, pageNum, maxPageNum;
    import { stores } from '@sapper/app';
</script>

<div class="mx-4 mb-2">
    <h1 class="text-4xl my-1">Blog</h1>
    <Bloglist {posts} {hasMore} {pageNum} {maxPageNum} />
</div>

<style>
    h1 {
        font-weight: bold;
        text-shadow: 4px 4px 4px #aaa;
    }
</style>
