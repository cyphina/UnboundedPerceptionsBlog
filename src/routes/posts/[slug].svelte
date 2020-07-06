<script context="module">
    export async function preload({ params, query }) {
        const res = await this.fetch(`posts/${params.slug}.json`);
        const data = await res.json();
        if (res.status === 200) {
            return { post: data };
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    export let post;
</script>

<h1 class="font-bold mb-4 text-center text-5xl">{post.title}</h1>
<h3 class="italic mb-4 text-center text-base">{post.date}</h3>
{@html post.html}
