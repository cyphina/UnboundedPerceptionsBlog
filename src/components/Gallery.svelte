<script>
    import { fade } from 'svelte/transition';
    import { tweened } from 'svelte/motion';
    import { cubicInOut } from 'svelte/easing';
    import Modal from './Modal.svelte';

    import { onMount } from 'svelte';

    // Gallery vars
    const pictureOpacityStore = tweened(1, { duration: 300, easing: cubicInOut });
    export let slides = [];
    let bShowGalleryNav = false;
    let curImgIndex = 0;

    // Dialog vars
    let modalRef; // A reference to the popup modal we pass into the modal component. The modal component then binds it to the correct element.

    function changeViewingImage(newIndex) {
        curImgIndex = newIndex;
    }

    function showGalleryNav(bShouldNewShowNav) {
        bShowGalleryNav = bShouldNewShowNav;
    }

    function onGalleryPictureChange() {
        // Create a litte fade in effect
        pictureOpacityStore.set(0, { duration: 0 });
        pictureOpacityStore.set(1, { duration: 1000, easing: cubicInOut });
    }

    onMount(() => {
        if (slides === undefined) {
        }
    });
</script>

<div
    class="gallery relative overflow-hidden"
    on:mouseenter="{() => showGalleryNav(true)}"
    on:mouseleave="{() => showGalleryNav(false)}"
>

    <div>
        <button on:click="{() => modalRef.showModal()}">
            <img
                src="{slides[curImgIndex]}"
                alt="Missing"
                class="slide absolute top-0 object-cover h-full w-full"
                style="opacity: {$pictureOpacityStore}"
                loading="lazy"
            />
        </button>
    </div>

    <div
        class="flex pl-1 pr-3 justify-end items-center absolute bottom-0 left-0 bg-opacity-50 bg-black w-full h-32"
        style="opacity: {bShowGalleryNav ? 1 : 0}"
    >
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

</div>

<Modal title="Closer Up Image" bind:modalRef>
    <img src="{slides[curImgIndex]}" alt="Missing" class="object-cover h-full w-full" />
</Modal>

<style>
    .gallery {
        height: 32rem;
        width: full;
    }
</style>
