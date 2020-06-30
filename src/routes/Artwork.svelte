<script>
    import Gallery from '../components/Gallery.svelte';
    import slides from '../../static/images/artwork/*.png';
</script>

<div class="m-2">
    <h1 class="text-4xl my-1 border-b border-black">Artwork</h1>
    <p>
        Here's a little gallery with some of the drawings I did.
        <br />
        <br />
        I hope I can do more someday but for now it's interview studying, programming technique technique practice, UE4
        learning, story writing, exercizing, and some portfolio development time... &#x1F637
    </p>
    <div class="mt-1 mb-4 mx-8 border-solid border border-gray-200">
        <Gallery {slides} />
    </div>
</div>
