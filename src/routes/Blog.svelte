<script context="module">
    import { chunk } from '../utilityfunctions.js';

    export async function preload(page) {
        const index = +(page.query.page || 1);
        const MAX_POSTS_PER_PAGE = 9;

        try {
            return await this.fetch(`Blog-Post.json`)
                .then(r => r.json())
                .then(posts => {
                    // Grab only a certain number of posts
                    const page = chunk(posts, MAX_POSTS_PER_PAGE)[index - 1];
                    // Sort posts by date
                    page.sort((a, b) => {
                        if (a.date < b.date) {
                            return 1;
                        }
                        if (a.date == b.date) {
                            if (a.filename < b.filename) {
                                return -1;
                            } else return 0;
                        }
                        return -1;
                    });
                    return {
                        page,
                        hasMore: posts.length >= index + 1,
                        pageNum: index,
                        maxPageNum: Math.ceil(posts.length / MAX_POSTS_PER_PAGE),
                    };
                });
        } catch (e) {
            this.error(500, `Error fetching posts: ${e}`);
        }
        // return {
        //     posts: post.pages[index - 1],
        //     hasMore: post.pages.length >= index + 1,
        //     pageNum: index,
        //     maxPageNum: Math.ceil(post.posts.length / post.postsPerPage),
        // };
    }
</script>

<script>
    import Bloglist from '../components/Bloglist.svelte';
    export let page, hasMore, pageNum, maxPageNum;
    import { stores } from '@sapper/app';
</script>

<div class="mx-4 mb-2">
    <h1 class="text-4xl my-1">Blog</h1>
    <Bloglist {page} {hasMore} {pageNum} {maxPageNum} />
</div>

<style>
    h1 {
        font-weight: bold;
        text-shadow: 4px 4px 4px #aaa;
    }
</style>
