<script>
    import Gallery from '../components/Gallery.svelte';
    import slides from '../../static/images/artwork/*.png';
</script>

<div class="m-2">
    <h1 class="text-4xl my-1 border-b border-black">Artwork</h1>
    <div class="mt-1 mb-4 mx-8 border-solid border border-gray-200">
        <Gallery {slides} />
    </div>
</div>
