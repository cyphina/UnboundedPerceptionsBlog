<script>
    import Gallery from '../components/Gallery.svelte';
    import slides from '../../static/images/MainPageGallery/*.png';
    import Tailwindcss from './Tailwindcss.svelte';
</script>

<div class="mx-4">
    <h1 class="text-7xl text-center my-1 border-b border-black">Unbounded Perceptions</h1>
    <h2 class="text-center text-2xl my-4">Welcome to my Site!</h2>
    <div class="mt-1 mb-4 mx-8 border-solid border border-gray-200">
        <Gallery {slides} />
    </div>
    <p>Hi it's Zi here.</p>
    <p>
        I am a developer who's dabbled in a few things but focuses most on gameplay development. I've been working on
        one game solo for the last four years. Right now that game is undergoing a large refactoring as I attempt to
        redesign my code from scratch. I was a total klutz when I started so things need to be decoupled which I am in
        the progress of doing in my redesign.
    </p>
    <p>
        Despite that, the concept of a few systems are well detailed in the game. You could use them as an example of
        how to do things in Unreal if you want. The list of things that I have designed and implemented in the game
        (albeit they may be buggy at the moment due to regressions) are listed here:
        <a href="https://github.com/cyphina/UnboundedPerceptions/blob/master/TestLevelDesign.docx">Test Plan</a>
    </p>
</div>

<style>
    h1 {
        font-weight: bold;
        text-shadow: 4px 4px 4px #aaa;
    }
    h2 {
        font-weight: bolder;
    }
    p {
        margin: 1em;
    }
    a {
        color: #0a3b08;
        background-color: aquamarine;
    }
</style>
