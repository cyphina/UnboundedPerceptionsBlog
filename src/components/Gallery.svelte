<script>
    import { fade } from 'svelte/transition';
    import { tweened } from 'svelte/motion';
    import { bounceInOut, cubicInOut } from 'svelte/easing';

    const pictureOpacityStore = tweened(1, { duration: 300, easing: bounceInOut });

    export let slides = [];
    let bShowGalleryNav = false;
    let curImgIndex = 0;

    function changeViewingImage(newIndex) {
        curImgIndex = newIndex;
    }

    function showGalleryNav(bShouldNewShowNav) {
        bShowGalleryNav = bShouldNewShowNav;
    }

    function onGalleryPictureChange() {
        // Create a litte fade in effect
        pictureOpacityStore.set(0, { duration: 0 });
        $pictureOpacityStore = 1;
    }
</script>

<div
    class="gallery relative overflow-hidden"
    on:mouseenter="{() => showGalleryNav(true)}"
    on:mouseleave="{() => showGalleryNav(false)}"
>

    <div>
        <img
            src="{slides[curImgIndex]}"
            alt="Missing"
            class="slide absolute top-0 object-cover h-full w-full"
            style="opacity: {$pictureOpacityStore}"
        />
    </div>

    {#if bShowGalleryNav}
        <div class="flex justify-end items-center absolute bottom-0 left-0 bg-opacity-50 bg-black w-full h-32">
            {#each slides as slide, index (slide)}
                <div class="relative overflow-hidden h-auto">
                    {#if curImgIndex !== index}
                        <img
                            on:click="{() => {
                                changeViewingImage(index);
                                onGalleryPictureChange();
                            }}"
                            src="{slide}"
                            alt="Missing"
                            class="object-cover h-24 w-40 mx-2 cursor-pointer hover:opacity-75"
                            in:fade="{{ duration: 300, easing: cubicInOut }}"
                        />
                    {/if}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .gallery {
        height: 32rem;
        width: full;
    }
</style>
