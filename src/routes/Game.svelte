<script>
    import Gallery from '../components/Gallery.svelte';
    import slides from '../../static/images/GameImages/*.jpg';
</script>

<main class="m-2">
    <p>
        This page (and eventually its subpages) has information about the game I've been working on the last four years.
        This is the game from which I taught myself most of what I know about programming and learning the ins and out
        of UE4.
    </p>
    <p>
        Before I talk about my game and showcase a gallery component, I would like to list the tutorials which this game
        is based off of. Of course since I've been working on it for so long, I have more features than those tutorials
        and I have expanded upon the tutorial's features as well.
    </p>
    <ul>
        <li>
            <a href="https://www.youtube.com/user/Aardaerimus">
                This youtube channel Aardaerimus is where I started it all
            </a>
        </li>

        <li>
            <a href="http://www.stormtek.geek.nz/">
                This tutorial series is where I moved to after. The things I've learned from this tutorial makes up the
                base framework for my game
            </a>
        </li>
        <li>
            <a href="https://www.youtube.com/watch?v=aipoAphfAN8">This is the first tutorial I watched in UE4</a>
        </li>
    </ul>
    <p>
        These tutorials are definately the most inspiring for me. They taught me a lot about the engines I used and they
        were really fun. However, for learning technique, I would read/watch different tutorials and read a few books I
        may list somewhere else. But you gotta have some inspiration first if you wanna do things for the long run am I
        right? (my teacher always asked that)
    </p>
    <p>
        Now here are the screenshots for my game. Looking back at these pics I've created so many user interfaces, but
        I'm defineately not a UI specialist. Just have to create things for the game.
    </p>
    <p class="text-center">
        The gallery may take some time to load...
    </p>
    <div class="mt-1 mb-4 mx-8 border-solid border border-gray-200">
        <Gallery {slides} />
    </div>
</main>
