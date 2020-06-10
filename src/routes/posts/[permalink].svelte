<script context="module">
    // Context module gives us page params
    import { findPost } from '../../posts';

    // Sapper calls this to load our data
    export function preload(page) {
        // Get params from our page's dynnamic parameter title
        const post = findPost(page.params.permalink);
        return { post };
    }
</script>

<script>
    export let post;
</script>

<h1>{post.title}</h1>

{@html post.html}
